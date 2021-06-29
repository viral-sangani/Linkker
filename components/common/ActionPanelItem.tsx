import { animated } from "react-spring";
import useBoop from "./hooks/useBoop";

interface Props {
  title: string;
  active?: boolean;
}

const ActionPanelItem: React.FC<Props> = ({ children, title, active }) => {
  const [style, trigger] = useBoop({ rotation: 20 });
  return (
    <>
      <div
        className={`flex flex-row space-x-3 items-center hover:bg-gray-200 px-4 cursor-pointer h-11 ${
          active ? `border-l-[3px] border-green-500` : ``
        }`}
        onMouseEnter={() => {
          trigger();
        }}
      >
        <animated.span style={style}>{children}</animated.span>
        <span
          className={`font-sourceSansPro font-semibold text-md ${
            active ? `text-green-500` : `text-gray-800`
          }`}
        >
          {title}
        </span>
      </div>
    </>
  );
};

export default ActionPanelItem;
