import { useEffect } from "react";
import useBoop from "../common/hooks/useBoop";

interface Props {
  divId: string;
  tooltipId: string;
  tooltipValue: string;
  Component?: any;
}

const LeftPanelItem: React.FC<Props> = ({
  divId,
  tooltipId,
  tooltipValue,
  Component,
}) => {
  useEffect(() => {
    const icon = document.querySelector(`#${divId}`);
    const iconTooltip = document.querySelector(`#${tooltipId}`);

    icon?.addEventListener("mouseenter", () => {
      console.log("Mouse entered");
      iconTooltip?.classList.remove("hidden");
    });

    icon?.addEventListener("mouseleave", () => {
      iconTooltip?.classList.add("hidden");
    });
  });

  const [style, trigger] = useBoop({ rotation: 15 });

  return (
    <>
      <div
        className="has-tooltip relative"
        id={divId}
        aria-describedby="tooltip"
        onMouseEnter={() => {
          trigger();
        }}
      >
        <div
          id={tooltipId}
          role="tooltip"
          className="hidden rounded bg-black px-3 py-1 text-white font-sourceSansPro absolute left-16 top-2 whitespace-nowrap"
        >
          {tooltipValue}
        </div>
        <span style={style}>
          {/* {children} */}
          <Component style={style} />
        </span>
      </div>
    </>
  );
};

export default LeftPanelItem;
