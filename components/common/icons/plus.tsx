import { animated } from "react-spring";

interface Props {
  logoColor?: string;
  style?: any;
}

export const PlusIcons: React.FC<Props> = ({ logoColor = "#888", style }) => {
  return (
    <div className="w-12 h-12 hover:bg-gray-100 rounded-md flex justify-center items-center cursor-pointer">
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke={logoColor}
        style={style}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </animated.svg>
    </div>
  );
};

export const PlusIconsSec: React.FC<Props> = ({ logoColor = "#888" }) => {
  return (
    <div className="w-8 h-8 hover:bg-gray-200 rounded-md flex justify-center items-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke={logoColor}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </div>
  );
};
