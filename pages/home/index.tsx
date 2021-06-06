import firebase from "firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../../components/common/buttons/Button";
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
    <div>
      {user?.email}
      <Button varient="primary" onClick={async () => await firebaseSignOut()}>
        SignOut
      </Button>
    </div>
  );
};

export default HomeIndex;
