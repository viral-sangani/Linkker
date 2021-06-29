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
    if (hover)
      return (
        <button
          onClick={onClick}
          className={`${className} font-sourceSansPro font-bold py-2 px-5 border bg-green-500 hover:bg-green-50 text-white hover:text-green-500 border-white hover:border-green-500 rounded-lg transition-colors duration-200 focus:outline-none`}
        >
          {children}
        </button>
      );
    else
      return (
        <button
          onClick={onClick}
          className={`${className} font-sourceSansPro font-bold py-2 px-5 border bg-green-500 hover:bg-green-400 text-white border-white rounded-lg transition-colors duration-200 focus:outline-none`}
        >
          {children}
        </button>
      );
  } else if (varient === "secondary") {
    return (
      <button
        onClick={onClick}
        className={`${className} font-sourceSansPro font-bold py-2 px-5 border hover:bg-green-500 text-green-500 hover:text-white border-green-500 hover:border-white rounded-lg transition-colors duration-200 focus:outline-none`}
      >
        {children}
      </button>
    );
  }
  return <div></div>;
};
