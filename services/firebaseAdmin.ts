import admin from "firebase-admin";
import { NextApiRequest } from "next";
import { UseAdminProps } from "./props";
let serviceAccount = require("./linkker-website-firebase-adminsdk.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.NEXT_APP_DATABASE_URL,
  });
}

const useAdmin = (): UseAdminProps => {
  const verifyIdToken = async (token: string) => {
    try {
      var decodedToken = await admin.auth().verifyIdToken(token);
      if (decodedToken) return true;
      else return false;
    } catch (error) {
      throw error;
    }
  };

  return { verifyIdToken };
};

const verifyIdToken = async (req: NextApiRequest) => {
  try {
    var { token } = req.headers;
    var decodedToken = await admin.auth().verifyIdToken(token!.toString());
    if (decodedToken) return decodedToken;
    else return null;
  } catch (error) {
    throw error;
  }
};

export { admin, useAdmin, verifyIdToken };
