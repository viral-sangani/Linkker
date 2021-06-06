import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../../components/common/buttons/Button";
import TextField from "../../components/common/buttons/TextField";
import { TempLogo } from "../../components/common/icons/tempLogo";
import { toastErr } from "../../helper/toast";
import { validateUsername } from "../../helper/validator";
import { useAuth } from "../../services/auth";

const SignupProcess: React.FC = () => {
  const router = useRouter();
  const { user, signupProcess } = useAuth()!;
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [buttonText, setButtonText] = useState("Continue");

  useEffect(() => {
    if (user?.processComplete) {
      router.replace("/home");
    }
  }, []);

  const firebaseSignupProcess = async () => {
    try {
      setButtonText("Please await... ⏳");
      var res = await signupProcess(username, name);
      setButtonText("Just there 😎");
      if (res) router.push("/signup/final");
    } catch (e) {
      toastErr({ message: e });
      setButtonText("Continue");
    }
  };

  return (
    <div className="flex flex-row flex-nowrap min-h-screen max-h-screen overflow-hidden">
      {/* Left Section */}
      <section className="w-full lg:w-2/3 flex justify-center items-start lg:items-center p-12 lg:pt-0">
        <div className="flex flex-col justify-start w-fill md:w-2/3 lg:4/6 pl-10 pr-10">
          <div className="flex lg:hidden flex-row items-center space-x-1 md:space-x-2 lg:space-x-3 pb-10">
            <TempLogo />
            <span className="font-mono text-default-800 font-bold text-xl">
              Linkker
            </span>
          </div>

          <span className="font-sourceSansPro font-bold text-3xl">
            We just need to confirm few things
          </span>

          {/* Email & Password */}

          <div className="w-full flex flex-col items-stretch pt-7 space-y-5">
            <div className="flex flex-col space-y-2">
              <span className="font-sourceSansPro font-bold text-lg">
                Tell us your username
              </span>
              <div className="flex flex-row flex-nowrap items-center">
                <span className="pr-2 font-sourceSansPro text-gray-500 font-bold">
                  https://linkker.in/
                </span>
                <TextField
                  type="text"
                  value={username}
                  placeholder="username"
                  onChange={(e) => {
                    if (!validateUsername(e.target.value))
                      setUsernameError(
                        "Username can only contain alphabets, numbers, . and _"
                      );
                    else setUsernameError("");
                    setUsername(e.target.value);
                  }}
                />
              </div>
            </div>
            <span
              className="font-sourceSansPro font-bold"
              style={{ color: "rgba(255, 0, 0, 0.7)", marginTop: 5 }}
            >
              {usernameError ? `* ${usernameError}` : ""}
            </span>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row justify-between">
                <span className="font-sourceSansPro font-bold text-lg">
                  Tell us your full name
                </span>
              </div>
              <TextField
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="self-start pt-2">
              <Button
                varient="primary"
                hover={false}
                onClick={() => {
                  firebaseSignupProcess();
                }}
                className="rounded-xl px-10"
              >
                {buttonText}
              </Button>
            </div>
            <div className="font-sourceSansPro self-center md:hidden block">
              Not a member?{" "}
              <Link href="/signup">
                <a className="text-purple-500">Sign up now.</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Right Section */}
      <section className="w-1/3 bg-default-50 lg:flex flex-col hidden">
        <div className="px-14 py-12 flex flex-col">
          <Link href="/">
            <div className="flex flex-row items-center space-x-1 md:space-x-2 lg:space-x-3 hover:cursor-pointer">
              <TempLogo />
              <span className="font-mono text-default-800 font-bold text-3xl">
                Linkker
              </span>
            </div>
          </Link>
        </div>
        <div className="px-14 text-3xl font-sourceSansPro font-extrabold text-default-800">
          One link for all of your audience. Share it in social medias, cards,
          resumes and anywhere.
        </div>
        <div className="self-center flex items-center">
          <Image
            src="/static/login-hero.png"
            height={461}
            width={376}
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default SignupProcess;
