import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Button } from "../common/buttons/Button";
import { LightningIcon } from "../common/icons/lightning";
import UrlItem from "../MainPanel.tsx/UrlItem";
import Topbar from "./TopBar";
import { UserInfo } from "./UserInfo";

const MainPanel: React.FC = (params) => {
  const one = "1";
  const two = "2";
  return (
    <div className="flex-grow bg-white flex flex-col items-stretch h-screen ">
      <Topbar />
      <div className="holy-grail overflow-y-auto">
        <div className="w-full">
          <UserInfo />
          <div className="flex flex-col space-y-1 mt-7 mb-7">
            <span className="font-sourceSansPro font-bold text-2xl mb-2">
              Links
            </span>
            <div className="py-6 px-5 rounded-lg flex flex-col w-full space-y-8">
              <div className="mx-14 flex flex-row flex-nowrap">
                <Button
                  varient="primary"
                  hover={false}
                  onClick={() => {}}
                  className="rounded-xl w-full text-lg"
                >
                  Add New Link
                </Button>
                <div style={{ marginLeft: 10 }}>
                  <Button
                    varient="primary"
                    hover={false}
                    onClick={() => {}}
                    className="rounded-x text-lg px-2"
                  >
                    <LightningIcon />
                  </Button>
                </div>
              </div>

              <DragDropContext onDragEnd={() => {}}>
                <Droppable droppableId="links">
                  {(provided) => (
                    <div
                      className="links flex flex-col space-y-5"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      <UrlItem keyId={one} />
                      <UrlItem keyId={two} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
{
  /* <div className="flex flex-row h-32 mx-8 border-[2px] border-gray-400 rounded-2xl">
                    <div className="w-6 h-full border-r-2 border-gray-400 flex items-center cursor-move">
                      <VerticalDotsIcon />
                    </div>
                    Viral
                  </div>

                  <div className="flex flex-row h-32 mx-8 border-[2px] border-gray-400 rounded-2xl">
                    <div className="w-6 h-full border-r-2 border-gray-400 flex items-center cursor-move">
                      <VerticalDotsIcon />
                    </div>
                    Viral
                  </div>

                  <div className="flex flex-row h-32 mx-8 border-[2px] border-gray-400 rounded-2xl">
                    <div className="w-6 h-full border-r-2 border-gray-400 flex items-center cursor-move">
                      <VerticalDotsIcon />
                    </div>
                    Viral
                  </div> */
}
