import firebase from "firebase";
import "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../store/recoilStore";
import firebaseClient from "./firebaseClient";
import {
  FirestoreUserModel,
  SigninProps,
  SignupProps,
  UserModel,
} from "./props";
interface AuthContextProps {
  loading: boolean;
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
  signupWithGoogle: () => Promise<firebase.auth.UserCredential>;
  signinWithGoogle: () => Promise<any>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  firebaseClient();
  const auth = useProviderAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export const useProviderAuth = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserModel | null>(null);
  const [firestoreUserState, setFirestoreUserState] = useRecoilState(userState);

  useEffect(() => {
    setLoading(true);
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (!user)
        if (!firebase.auth().currentUser) {
          setUser(null);
          setLoading(false);
          return;
        }

      var userModel: UserModel = { ...user!, processComplete: false };
      var docData = await firebase
        .firestore()
        .collection("users")
        .doc(userModel.uid)
        .get();
      if (docData.exists) {
        var firestoreUser: FirestoreUserModel = {
          displayName: docData.data()!["displayName"],
          email: docData.data()!["email"],
          emailVerified: docData.data()!["emailVerified"],
          photoUrl: docData.data()!["photoUrl"],
          processComplete: docData.data()!["processComplete"],
          uid: docData.data()!["id"],
          username: docData.data()!["username"],
        };
        setFirestoreUserState(() => firestoreUser);
        setUser(userModel);
        setLoading(false);
      } else signOut();
    });
  }, []);

  const signupWithEmailPassword = async ({
    email,
    password,
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

  const signupWithGoogle = async () => {
    try {
      var provider = new firebase.auth.GoogleAuthProvider();
      var userCred = await firebase.auth().signInWithPopup(provider);
      var token = await firebase.auth().currentUser?.getIdToken();
      if (token) {
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
      } else throw "Error occured, please try again.";
    } catch (error) {
      throw error;
    }
  };

  const signupProcess = async (username: string, name: string) => {
    try {
      var token = await firebase.auth().currentUser?.getIdToken();
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

  const signinWithGoogle = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    var user = await firebase
      .auth()
      .signInWithPopup(provider)
      .catch((error) => {
        throw error;
      });
    var token = await user.user?.getIdToken();
    var res = await fetch("/api/signin/checkuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token!,
      },
    });
    var rawRes = await res.json();
    if (rawRes.success === true) {
      return true;
    } else {
      signOut();
      return false;
    }
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
    loading,
    user,
    signOut,
    signupWithGoogle,
    signupWithEmailPassword,
    signupProcess,
    signinWithEmailPassword,
    signinWithGoogle,
  };
};
