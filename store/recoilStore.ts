import { atom } from "recoil";
import { FirestoreUserModel } from "./../services/props";

export const userState = atom<FirestoreUserModel | undefined>({
  key: "firestoreUserKey",
  default: undefined,
});
