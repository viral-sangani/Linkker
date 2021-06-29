import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../components/common/buttons/Button";
import { TempLogo } from "../../components/common/icons/tempLogo";
import { useAuth } from "../../services/auth";

const Signup: React.FC = () => {
  const router = useRouter();
  const { user } = useAuth()!;

  return (
    <div className="flex flex-row flex-nowrap min-h-screen overflow-hidden">
      {/* Left Section */}
      <section className="w-1/3 bg-blue-100 lg:flex flex-col hidden">
        <div className="px-14 py-12 flex flex-col">
          <Link href="/">
            <div className="flex flex-row items-center space-x-1 md:space-x-2 lg:space-x-3">
              <TempLogo logoColor="#953C22" />
              <span className="font-mono text-blue-800 font-bold text-3xl">
                Linkker
              </span>
            </div>
          </Link>
        </div>
        <div className="px-14 text-3xl font-sourceSansPro font-extrabold text-blue-800">
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
            <span className="font-mono text-green-800 font-bold text-xl">
              Linkker
            </span>
          </div>

          <span className="font-sourceSansPro font-bold text-3xl">
            Thanks for signing up 🥳 🍻
          </span>

          <span className="font-sourceSansPro font-bold text-xl py-5">
            To verify your account, click on the link in your inbox -{" "}
            {user?.email}
          </span>

          <div className="w-full flex flex-col items-stretch pt-5 space-y-5">
            <div className="self-start pt-2">
              <Button
                varient="primary"
                hover={false}
                onClick={() => {
                  router.push("/home");
                }}
                className="rounded-xl px-10"
              >
                Continue to my Linkker account
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
