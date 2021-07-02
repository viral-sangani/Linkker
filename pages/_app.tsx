import "animate.css/animate.min.css";
import { AppProps } from "next/app";
import { cssTransition, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "../services/auth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const fade = cssTransition({
    enter: "animate__animated animate__fadeIn",
    exit: "animate__animated animate__fadeOut",
  });
  return (
    <RecoilRoot>
      <AuthProvider>
        <ToastContainer
          limit={1}
          position="top-right"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={fade}
        />
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
