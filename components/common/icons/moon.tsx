import { animated } from "react-spring";

interface Props {
  logoColor?: string;
  style?: any;
}

export const MoonIcons: React.FC<Props> = ({ logoColor = "#888", style }) => {
  return (
    <div className="w-12 h-12 hover:bg-gray-100 rounded-md flex justify-center items-center cursor-pointer ">
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke={logoColor}
        style={style}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </animated.svg>
    </div>
  );
};
