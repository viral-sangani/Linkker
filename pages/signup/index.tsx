import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../../components/common/buttons/Button";
import TextField from "../../components/common/buttons/TextField";
import { FacebookLogo } from "../../components/common/icons/social/facebook";
import { GithubLogo } from "../../components/common/icons/social/github";
import { GoogleLogo } from "../../components/common/icons/social/google";
import { TwitterLogo } from "../../components/common/icons/social/twitter";
import { TempLogo } from "../../components/common/icons/tempLogo";
import { delay } from "../../helper/helper";
import { toastErr } from "../../helper/toast";
import { validateEmail, validatePassword } from "../../helper/validator";
import { signupWithEmailPassword } from "../../services/auth";

const Signup: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Sign Up");

  const signup = async () => {
    if (!validateEmail(email)) {
      toastErr({ message: "Invalid email, please try again." });
      return;
    }
    if (!validatePassword(password)) {
      toastErr({ message: "Invalid password, please try again." });
      return;
    }
    try {
      setButtonText("Please await... ⏳");
      var user = await signupWithEmailPassword({ email, password });

      if (user) {
        // Found the user, redirect to process page
        setButtonText("Almost Done 😎");
        await delay(1000);
        router.push("/signup/process");
      } else {
        // User not found, show signup button again
        setButtonText("Sign Up");
        toastErr({ message: "Something went wrong, please try again." });
      }
    } catch (e) {
      // Error
      setButtonText("Sign Up");
      toastErr({ message: e.message });
    }
  };

  return (
    <div className="flex flex-row flex-nowrap min-h-screen overflow-hidden">
      {/* Left Section */}
      <section className="w-1/3 bg-indigo-100 lg:flex flex-col hidden">
        <div className="px-14 py-12 flex flex-col">
          <Link href="/">
            <div className="flex flex-row items-center space-x-1 md:space-x-2 lg:space-x-3">
              <TempLogo logoColor="#953C22" />
              <span className="font-mono text-indigo-800 font-bold text-3xl">
                Linkker
              </span>
            </div>
          </Link>
        </div>
        <div className="px-14 text-3xl font-sourceSansPro font-extrabold text-indigo-800">
          Connect all of your audience at one place and grow your audience.
        </div>
        <div className="self-center pt-2">
          <Image
            src="/static/register-hero.png"
            height={461}
            width={376}
            priority
          />
        </div>
      </section>
      {/* Right Section */}
      <section className="w-full lg:w-2/3 flex justify-center items-start lg:items-center p-12 lg:pt-0">
        <div className="flex flex-col justify-start w-fill md:w-2/3 lg:4/6 pl-10 pr-10">
          <div className="flex lg:hidden flex-row items-center space-x-1 md:space-x-2 lg:space-x-3 pb-10">
            <TempLogo />
            <span className="font-mono text-default-800 font-bold text-xl">
              Linkker
            </span>
          </div>

          <span className="font-sourceSansPro font-bold text-3xl">
            Sign up to Linkker
          </span>

          {/* Social Icons to login with */}
          <div className="pt-4 flex flex-row space-x-3">
            <GoogleLogo text="Sign up with Google" />
            <TwitterLogo />
            <GithubLogo />
            <FacebookLogo />
          </div>

          {/* OR */}
          <div className="pt-7">
            <div className="separator font-sourceSansPro text-gray-500">Or</div>
          </div>

          {/* Email & Password */}

          <div className="w-full flex flex-col items-stretch pt-7 space-y-5">
            <div className="flex flex-col space-y-2">
              <span className="font-sourceSansPro font-bold text-lg">
                Email Address
              </span>
              <TextField
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row justify-between">
                <span className="font-sourceSansPro font-bold text-lg">
                  Password
                </span>
                <a href="#" className="font-sourceSansPro text-base">
                  Forgot password?
                </a>
              </div>
              <TextField
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="self-start pt-2">
              <Button
                varient="primary"
                hover={false}
                onClick={() => {
                  signup();
                }}
                className="rounded-xl px-10"
              >
                {buttonText}
              </Button>
            </div>
            <div className="font-sourceSansPro self-center md:hidden block">
              Already a member?{" "}
              <Link href="/signin">
                <a className="text-purple-500">Sign in now.</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-10 font-sourceSansPro hidden md:block">
          Already a member?{" "}
          <Link href="/signin">
            <a className="text-purple-500">Sign in now.</a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Signup;
