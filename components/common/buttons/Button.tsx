import { MouseEventHandler } from "react";

interface Props {
  varient: "primary" | "secondary";
  onClick: MouseEventHandler;
  className?: string;
  hover?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  varient,
  className,
  hover,
}) => {
  if (varient === "primary") {
    return (
      <button
        onClick={onClick}
        className={`${className} font-sourceSansPro font-bold py-2 px-5 border bg-default-600 hover:bg-default-50 text-white hover:text-default-600 border-white hover:border-default-600 rounded-md transition-colors duration-200 focus:outline-none`}
      >
        {children}
      </button>
    );
  } else if (varient === "secondary") {
    return (
      <button
        onClick={onClick}
        className={`${className} font-sourceSansPro font-bold py-2 px-5 border hover:bg-default-600 text-default-600 hover:text-white border-default-600 hover:border-white rounded-md transition-colors duration-200 focus:outline-none`}
      >
        {children}
      </button>
    );
  }
  return <div></div>;
};
