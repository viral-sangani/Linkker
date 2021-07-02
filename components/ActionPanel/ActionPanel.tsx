import { AllPlaylistsIcon } from "../common/icons/allplaylists";
import { DraftIcon } from "../common/icons/draft";
import { PlusIconsSec } from "../common/icons/plus";
import { ThemeIcon } from "../common/icons/theme";
import { UserIcon } from "../common/icons/user";
import ActionPanelItem from "./ActionPanelItem";

const ActionPanel: React.FC = (params) => {
  return (
    <div
      className="w-80 bg-gray-100 border-gray-200 py-10 flex flex-col"
      style={{ borderLeftWidth: 1, borderRightWidth: 1 }}
    >
      <ActionPanelItem title="My Links" active>
        <UserIcon active />
      </ActionPanelItem>

      <ActionPanelItem title="Themes">
        <ThemeIcon />
      </ActionPanelItem>

      <ActionPanelItem title="Drafts">
        <DraftIcon />
      </ActionPanelItem>

      <div className="px-4 pt-5 pb-2 flex flex-row justify-between items-center">
        <span className="font-sourceSansPro font-semibold text-gray-400 text-sm">
          MY PLAYLISTS
        </span>
        <PlusIconsSec />
      </div>

      <ActionPanelItem title="All Playlists">
        <AllPlaylistsIcon />
      </ActionPanelItem>

      <ActionPanelItem title="Learn ReactJS My Way">
        <DraftIcon />
      </ActionPanelItem>

      <div className="px-4 pt-5 pb-2 flex flex-row justify-between items-center">
        <span className="font-sourceSansPro font-semibold text-gray-400 text-sm">
          PRIVATE
        </span>
        <PlusIconsSec />
      </div>

      <ActionPanelItem title="Learn ReactJS My Way">
        <DraftIcon />
      </ActionPanelItem>
    </div>
  );
};

export default ActionPanel;
