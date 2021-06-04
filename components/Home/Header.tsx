import { useRouter } from "next/router";
import { Button } from "../common/buttons/Button";
import { TempLogo } from "../common/icons/tempLogo";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex-auto">
      <nav className="flex justify-between items-center pt-12 max-w-7xl m-auto">
        <div className="flex flex-row items-center space-x-1 md:space-x-2 lg:space-x-3">
          <TempLogo />
          <span className="font-mono text-default-800 font-bold text-3xl">
            Linkker
          </span>
        </div>
        <div className="hidden md:flex md:space-x-6 lg:space-x-8 items-center">
          <a
            href="#"
            className="font-sourceSansPro transition-all duration-300 border-b-2 border-transparent hover:border-default-600 py-5 text-lightBlack hover:text-black text-lg font-medium"
          >
            Blog
          </a>
          <a
            href="#"
            className="font-sourceSansPro transition-all duration-300 border-b-2 border-transparent hover:border-default-600 py-5 text-lightBlack hover:text-black text-lg font-medium"
          >
            Pricing
          </a>
          <a
            href="#"
            className="font-sourceSansPro transition-all duration-300 border-b-2 border-transparent hover:border-default-600 py-5 text-lightBlack hover:text-black text-lg font-medium"
          >
            Help
          </a>
          <Button
            varient="secondary"
            onClick={() => {
              router.push("/signin");
            }}
          >
            LOGIN
          </Button>
        </div>
      </nav>
    </div>
  );
}
