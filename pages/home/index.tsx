import firebase from "firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ActionPanel from "../../components/Home/ActionPanel";
import { LeftPanel } from "../../components/Home/LeftPanel";
import MainPanel from "../../components/Home/MainPanel";
import { useAuth } from "../../services/auth";

const HomeIndex = () => {
  const router = useRouter();
  const { signOut } = useAuth()!;

  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    console.log(firebase.auth().currentUser);
    setUser(firebase.auth().currentUser);
  });

  const firebaseSignOut = async () => {
    await signOut();
    router.replace("/");
  };

  return (
    <>
      <div className="flex flex-row min-h-screen">
        <LeftPanel />

        <ActionPanel />

        <MainPanel />
      </div>
    </>
  );
};

export default HomeIndex;
