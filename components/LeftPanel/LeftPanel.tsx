import { useEffect } from "react";
import { AnalysisIcons } from "../common/icons/analysis";
import { MoonIcons } from "../common/icons/moon";
import { PlusIcons } from "../common/icons/plus";
import { SettingsIcons } from "../common/icons/settings";
import LeftPanelItem from "./LeftPanelItem";

export const LeftPanel: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="w-16 bg-white px-4">
      <div className="flex flex-col justify-between items-center py-5 h-full">
        <div
          className="font-playfair text-3xl text-primary font-bold relative cursor-pointer p-2"
          id="logo"
          aria-describedby="tooltip"
        >
          L
          <div
            id="logoTooltip"
            role="tooltip"
            className="hidden rounded bg-black px-3 py-1 text-white font-sourceSansPro absolute left-14 top-2 whitespace-nowrap text-base font-normal"
          >
            Home
          </div>
        </div>
        <div className="flex flex-col space-y-5 items-center justify-center">
          <LeftPanelItem
            divId="plusIcon"
            tooltipId="plusIconTooltip"
            tooltipValue="Add Playlist"
            Component={PlusIcons}
          />

          <LeftPanelItem
            divId="moonIcon"
            tooltipId="moonIconTooltip"
            tooltipValue="Change theme"
            Component={MoonIcons}
          />

          <LeftPanelItem
            divId="profileIcon"
            tooltipId="profileIconTooltip"
            tooltipValue="Profile analysis"
            Component={AnalysisIcons}
          />

          <LeftPanelItem
            divId="settingsIcon"
            tooltipId="settingsIconTooltip"
            tooltipValue="Change account settings"
            Component={SettingsIcons}
          />
        </div>
        <div className="cursor-pointer">
          <img
            src="https://avatars.githubusercontent.com/u/36530381?s=400&u=f5c86dce9b82630cd575e51bf8e201bc1692a75a&v=4"
            className="h-9 w-9 rounded-full "
          />
        </div>
      </div>
    </div>
  );
};
