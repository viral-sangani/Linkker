import firebase from "firebase";
import "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import firebaseClient from "./firebaseClient";
import { SigninProps, SignupProps, UserModel } from "./props";

interface AuthContextProps {
  user: UserModel | null;
  signupWithEmailPassword: ({
    email,
    password,
    name,
  }: SignupProps) => Promise<firebase.auth.UserCredential | null | undefined>;
  signinWithEmailPassword: ({
    email,
    password,
  }: SigninProps) => Promise<firebase.auth.UserCredential | null | undefined>;
  signOut: () => Promise<void>;
  signupProcess: (username: string, name: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  firebaseClient();
  const auth = useProviderAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export const useProviderAuth = () => {
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        setUser(null);
        return;
      }
      var userModel: UserModel = { ...user, processComplete: false };
      setUser(userModel);
    });
  }, []);

  const signupWithEmailPassword = async ({
    email,
    password,
    name,
  }: SignupProps): Promise<firebase.auth.UserCredential> => {
    try {
      var userCred = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      var token = await userCred.user?.getIdToken();
      var res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: token!,
        },
        body: JSON.stringify(userCred),
      });
      var rawRes = await res.json();
      if (res.status !== 500 && res.status !== 501) return userCred;
      else throw rawRes.message;
    } catch (error) {
      throw error;
    }
  };

  const signupProcess = async (username: string, name: string) => {
    try {
      var token = await firebase.auth().currentUser?.getIdToken();
      console.log(token);
      var res = await fetch("/api/signup/process", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: token!,
        },
        body: JSON.stringify({ username, name }),
      });
      var rawRes = await res.json();
      console.log("rawRes :>> ", rawRes.message);
      if (!rawRes.success) throw new Error(rawRes.message);
      else if (res.status !== 500 && res.status !== 501) return true;
      else throw rawRes.message;
    } catch (error) {
      throw error.message;
    }
  };

  const signinWithEmailPassword = async ({
    email,
    password,
  }: SigninProps): Promise<firebase.auth.UserCredential> => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        throw error;
      });
  };

  const signOut = async () => {
    return firebase
      .auth()
      .signOut()
      .catch((error) => {
        throw error;
      });
  };

  return {
    user,
    signOut,
    signinWithEmailPassword,
    signupWithEmailPassword,
    signupProcess,
  };
};
