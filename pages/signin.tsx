import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../components/common/buttons/Button";
import TextField from "../components/common/buttons/TextField";
import { FacebookLogo } from "../components/common/icons/social/facebook";
import { GithubLogo } from "../components/common/icons/social/github";
import { GoogleLogo } from "../components/common/icons/social/google";
import { TwitterLogo } from "../components/common/icons/social/twitter";
import { TempLogo } from "../components/common/icons/tempLogo";

const Signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-row flex-nowrap min-h-screen">
      {/* Left Section */}
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
        <div className="px-14 text-4xl font-sourceSansPro font-extrabold text-default-800">
          One link for all of your audience. Share it in social medias, cards,
          resumes and anywhere.
        </div>
        <div className="self-center pt-2">
          <Image src="/static/login-hero.png" height={581} width={446} />
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
            Sign in to Linkker
          </span>

          {/* Social Icons to login with */}
          <div className="pt-4 flex flex-row space-x-3">
            <GoogleLogo />
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
                onClick={() => {}}
                className="rounded-xl px-10"
              >
                Sign In
              </Button>
            </div>
            <div className="font-sourceSansPro self-center md:hidden block">
              Not a member?{" "}
              <Link href="/signup">
                <a className="text-purple-500">Sing up now.</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-10 font-sourceSansPro hidden md:block">
          Not a member?{" "}
          <Link href="/signup">
            <a className="text-purple-500">Sing up now.</a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Signin;
