import { useRouter } from "next/router";
import { useEffect } from "react";
import ActionPanel from "../../components/ActionPanel/ActionPanel";
import LoadingScreen from "../../components/common/Loading";
import { LeftPanel } from "../../components/LeftPanel/LeftPanel";
import MyLinkPanel from "../../components/MainPanel/MyLinks/MyLink";
import { useAuth } from "../../services/auth";

const HomeIndex = () => {
  const router = useRouter();
  const { signOut, user, loading } = useAuth()!;

  useEffect(() => {
    if (!loading && !user) {
      firebaseSignOut();
    }
  }, [loading, user]);

  const firebaseSignOut = async () => {
    await signOut();
    router.replace("/");
  };

  if (!loading && user) {
    return (
      <>
        <div className="flex flex-row min-h-screen">
          <LeftPanel />
          <ActionPanel />
          <MyLinkPanel />
        </div>
      </>
    );
  } else return <LoadingScreen />;
};

export default HomeIndex;
