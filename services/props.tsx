import firebase from "firebase";

export interface IconsProps {
  index: number;
  name: string;
  url: string;
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

export interface UserModel extends firebase.User {
  processComplete?: boolean;
}

export interface FirestoreUserModel {
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoUrl?: string;
  processComplete: boolean;
  uid: string;
  username: string;
}

export interface UseAdminProps {
  verifyIdToken: (token: string) => Promise<boolean>;
}

export interface UserUrlProps {
  id: string;
  title: string;
  url: string;
  image?: string;
  isActive: boolean;
  isPriorityUrl: boolean;
}
