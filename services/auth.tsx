import firebase from "firebase";
import "firebase/auth";
import nookies from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import firebaseClient from "./firebaseClient";

interface AuthContextProps {
  user: firebase.User | null;
}

export interface SignupProps {
  email: string;
  password: string;
  name?: string;
}

export interface SigninProps {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  firebaseClient();
  const [user, setUser] = useState<firebase.User | null>(null);
  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, "token", token, {});
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const signupWithEmailPassword = async ({
  email,
  password,
  name,
}: SignupProps): Promise<firebase.auth.UserCredential | null | undefined> => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      throw error;
    });
};

export const loginWithEmailPassword = async ({
  email,
  password,
}: SigninProps): Promise<firebase.auth.UserCredential | null | undefined> => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      throw error;
    });
};

export const firebaseSignOut = async () => {
  return firebase
    .auth()
    .signOut()
    .catch((error) => {
      throw error;
    });
};
