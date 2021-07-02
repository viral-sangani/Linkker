import { useState } from "react";
import { animated } from "react-spring";
import { useRecoilValue } from "recoil";
import { FirestoreUserModel } from "../../services/props";
import { userState } from "../../store/recoilStore";
import useBoop from "../common/hooks/useBoop";
import { EyeIcon } from "../common/icons/eye";

const Topbar: React.FC = () => {
  const user: FirestoreUserModel | undefined = useRecoilValue(userState);

  const [previewText, setPreviewText] = useState("Preview");

  const [style, trigger] = useBoop({
    rotation: 30,
    springConfig: {
      tension: 500,
      friction: 5,
    },
  });

  return (
    <>
      <div className="holy-grail border-b-[1px] sticky top-0 z-10 bg-white">
        <div className="h-14 flex justify-between items-center">
          <div className="flex items-center">
            <animated.span style={style} className="text-3xl cursor-default">
              👋
            </animated.span>
            <span
              className="font-sourceSansPro font-semibold text-xl px-4 cursor-default"
              onMouseEnter={() => {
                trigger();
              }}
            >
              Hello {user?.displayName ?? user?.username ?? ""}
            </span>
          </div>
          <div>
            <div
              className="py-2 px-3 bg-white hover:bg-gray-100 rounded-lg cursor-pointer flex flex-row flex-nowrap items-center space-x-1 transition-all duration-300"
              onClick={() => {
                setPreviewText(
                  previewText === "Preview" ? "Close Preview" : "Preview"
                );
              }}
            >
              <span className="font-sourceSansPro font-semibold text-lg text-gray-700 select-none	">
                {previewText}
              </span>
              <EyeIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
