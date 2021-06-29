import { animated } from "react-spring";
import useBoop from "../common/hooks/useBoop";

const MainPanel: React.FC = (params) => {
  const [style, trigger] = useBoop({
    rotation: 30,
    springConfig: {
      tension: 500,
      friction: 5,
    },
  });
  return (
    <div className="flex-grow bg-white flex flex-col items-stretch">
      <div
        className="h-14 border-gray-200 flex justify-start items-center px-8 "
        style={{ borderBottomWidth: 1 }}
      >
        <animated.span style={style} className="text-3xl cursor-default">
          👋
        </animated.span>
        <span
          className="font-sourceSansPro font-semibold text-xl px-4 cursor-default"
          onMouseEnter={() => {
            trigger();
          }}
        >
          Hello Viral Sangani
        </span>
      </div>
    </div>
  );
};

export default MainPanel;
