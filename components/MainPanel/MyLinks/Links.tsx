import { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { FakeUserUrlData } from "../../../helper/constants";
import { Button } from "../../common/buttons/Button";
import { LightningIcon } from "../../common/icons/lightning";
import AddUserUrlModel from "./Models/AddUserUrlModel";
import UrlItem from "./UrlItem";

const Links: React.FC = () => {
  const [listData, setListData] = useState(FakeUserUrlData);
  const [addUrlIsOpen, setAddUrlIsOpen] = useState(false);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(listData);
    const [reorederedItem] = items.slice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorederedItem);
    setListData(items);
  };

  return (
    <div className="flex flex-col space-y-1 mt-7 mb-7">
      <AddUserUrlModel
        isOpen={addUrlIsOpen}
        closeModal={() => {
          setAddUrlIsOpen(false);
        }}
      />
      <span className="font-sourceSansPro font-bold text-2xl mb-2">Links</span>
      <div className="py-6 px-2 md:px-5 rounded-lg flex flex-col w-full space-y-8">
        <div className="mx-7 md:mx-14 flex flex-row flex-nowrap">
          <Button
            varient="primary"
            hover={false}
            onClick={() => {
              setAddUrlIsOpen(true);
            }}
            className="rounded-xl w-full text-lg"
          >
            Add New Link
          </Button>
          <div style={{ marginLeft: 10 }}>
            <Button
              varient="primary"
              hover={false}
              onClick={() => {
                setAddUrlIsOpen(true);
              }}
              className="rounded-x text-lg px-2"
            >
              <LightningIcon />
            </Button>
          </div>
        </div>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="links">
            {(provided) => (
              <div
                className="links flex flex-col"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {listData.map((userUrl) => {
                  return <UrlItem keyId={userUrl.id} userUrl={userUrl} />;
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};
export default Links;
