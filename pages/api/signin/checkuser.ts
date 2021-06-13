import { NextApiRequest, NextApiResponse } from "next";
import { admin, verifyIdToken } from "../../../services/firebaseAdmin";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  var tokenRes = await verifyIdToken(req);
  if (tokenRes) {
    var userDoc = await admin
      .firestore()
      .collection("users")
      .doc(tokenRes.uid)
      .get();
    if (!userDoc.exists)
      return res
        .status(200)
        .json({ message: "User not found. Please signup.", status: false });
    else return res.status(200).json({ succes: true });
  } else
    return res.status(200).json({ message: "User not found. Please signup." });
};

export default handler;
