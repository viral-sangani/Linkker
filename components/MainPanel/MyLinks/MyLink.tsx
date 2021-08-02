import Topbar from "../../Home/TopBar";
import Links from "./Links";
import { UserInfo } from "./UserInfo";

const MyLinkPanel: React.FC = (params) => {
  return (
    <div className="flex-grow bg-white flex flex-col items-stretch h-screen ">
      <Topbar />
      <div className="holy-grail overflow-y-auto">
        <div className="w-full">
          <UserInfo />
          <Links />
        </div>
      </div>
    </div>
  );
};

export default MyLinkPanel;
