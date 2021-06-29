import { animated } from "react-spring";

interface Props {
  logoColor?: string;
  style?: any;
}

export const AnalysisIcons: React.FC<Props> = ({
  logoColor = "#888",
  style,
}) => {
  return (
    <div className="w-12 h-12 hover:bg-gray-100 rounded-md flex justify-center items-center cursor-pointer">
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke={logoColor}
        style={style}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </animated.svg>
    </div>
  );
};
