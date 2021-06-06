import firebase from "firebase";

export interface SignupProps {
  email: string;
  password: string;
  name?: string;
}

export interface SigninProps {
  email: string;
  password: string;
}

export interface UserModel extends firebase.User {
  processComplete?: boolean;
}

export interface UseAdminProps {
  verifyIdToken: (token: string) => Promise<boolean>;
}