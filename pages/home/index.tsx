import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import nookies from "nookies";
import { Button } from "../../components/common/buttons/Button";
import { HomeIndexProps } from "../../components/common/interfaces";
import { firebaseSignOut } from "../../services/auth";
import { verifyIdToken } from "../../services/firebaseAdmin";

// https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
const HomeIndex = ({ session }: HomeIndexProps) => {
  const router = useRouter();

  const signOut = async () => {
    await firebaseSignOut();
    router.replace("/");
  };

  return (
    <div>
      {session.uid}
      <Button varient="primary" onClick={async () => await signOut()}>
        SignOut
      </Button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = nookies.get(context);
    const user = await verifyIdToken(cookies.token);
    console.log("user :>> ", user);
    const { uid, email } = user;
    return {
      props: {
        session: {
          uid,
          email,
        },
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/signin",
        statusCode: 301,
      },
    };
  }
};

export default HomeIndex;
