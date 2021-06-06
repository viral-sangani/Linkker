// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import firebase from "firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { admin, verifyIdToken } from "../../../services/firebaseAdmin";

type NextApiRequestWithUser = NextApiRequest & {
  body: { user: firebase.auth.UserCredential };
};

const handler = async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  var tokenRes = await verifyIdToken(req);
  const { mode } = req.query;
  if (tokenRes) {
    if (!mode) {
      const { user } = req.body;
      await admin
        .firestore()
        .collection("users")
        .doc(tokenRes.uid)
        .create({
          uid: user.uid,
          displayName: user.displayName ?? "",
          photoURL: user.photoURL ?? "",
          email: user.email,
          emailVerified: user.emailVerified,
          createdAt: user.createdAt,
          lastLoginAt: user.lastLoginAt,
          processComplete: false,
        });
      res.status(200).json({ success: true });
    } else if (mode.length > 0 && mode[0] === "process") {
      const { username, name } = req.body;
      var doc = await admin
        .firestore()
        .collection("users")
        .where("username", "==", username)
        .get();
      console.log(`doc`, doc.empty);
      if (!doc.empty) {
        res
          .status(200)
          .json({ success: false, message: "Username already exits." });
      } else {
        await admin.firestore().collection("users").doc(tokenRes.uid).update({
          username: username,
          fullName: name,
        });
        res.status(200).json({ success: true });
      }
    }
  } else {
    res
      .status(401)
      .json({ error: "Authentication issue, Please login again." });
  }
};

export default handler;
