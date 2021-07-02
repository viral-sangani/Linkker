import { Switch } from "@headlessui/react";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { InlineInputEdit } from "react-inline-input-edit";
import { AnalyticsIcons } from "../common/icons/analytics";
import { CalendarIcons } from "../common/icons/calendar";
import { DeleteIcons } from "../common/icons/delete";
import { ImageIcon } from "../common/icons/image";
import { PencilIcon } from "../common/icons/pencil";
import { StarIcon } from "../common/icons/star";
import { VerticalDotsIcon } from "../common/icons/vertical-dots";
import DeleteModel from "./DeleteModel";

enum ModelEnum {
  DELETE,
}

interface Props {
  keyId: string;
}

const UrlItem: React.FC<Props> = ({ keyId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [openModel, setOpenModel] = useState<ModelEnum | null>(null);

  const closeModel = () => {
    setOpenModel(null);
  };

  const _handleFocus = () => {
    setIsEditing(true);
  };

  const _handleFocusOut = () => {
    setIsEditing(false);
  };

  return (
    <Draggable key={keyId} draggableId={keyId} index={0}>
      {(provided) => (
        <div
          className="relative transition-height duration-500 ease-in-out"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <DeleteModel
            isOpen={openModel === ModelEnum.DELETE}
            closeModal={closeModel}
          />

          <div className="absolute top-4 right-10">
            <Switch
              checked={isActive}
              onChange={setIsActive}
              className={`${
                isActive ? "bg-green-500" : "bg-gray-200"
              } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-0`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  isActive ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
              />
            </Switch>
          </div>
          <div className="container items-center px-5 lg:px-8 w-full">
            <div className="p-4 mx-auto bg-white border rounded-lg shadow-md w-full">
              <div className="flex items-center py-2 rounded-lg flex-row">
                <div
                  className="w-8 flex justify-center items-center"
                  {...provided.dragHandleProps}
                >
                  <VerticalDotsIcon />
                </div>
                <div className="flex flex-col w-full text-blueGray-500 lg:ml-4 space-y-2">
                  <div className="flex flex-row items-center">
                    <InlineInputEdit
                      text={`Instgram`}
                      inputWidth="85%"
                      inputBorderWidth={0}
                      inputHeight="25px"
                      inputMaxLength={50}
                      labelFontWeight="bold"
                      inputFontWeight="bold"
                      inputClassName="px-2 py-1"
                      onFocus={_handleFocus}
                      onFocusOut={_handleFocusOut}
                      isEditing={isEditing}
                    />
                    {!isEditing && <PencilIcon onClick={() => {}} />}
                  </div>
                  <div className="flex flex-row items-center">
                    <InlineInputEdit
                      text={`https://instagram.com/__viral_`}
                      inputWidth="85%"
                      inputHeight="25px"
                      inputMaxLength={50}
                      inputClassName="px-2 py-1 text-grey-200"
                      onFocus={_handleFocus}
                      onFocusOut={_handleFocusOut}
                      isEditing={isEditing}
                    />
                    {!isEditing && <PencilIcon onClick={() => {}} />}
                  </div>
                  <div className="flex flex-row justify-start pt-3">
                    <div className="mr-3 cursor-pointer">
                      <ImageIcon />
                    </div>
                    <div className="mr-3 cursor-pointer">
                      <StarIcon />
                    </div>
                    <div className="mr-3 cursor-pointer">
                      <AnalyticsIcons />
                    </div>
                    <div className="mr-3 cursor-pointer">
                      <CalendarIcons />
                    </div>
                    <div
                      className="mr-3 cursor-pointer"
                      onClick={() => {
                        setOpenModel(ModelEnum.DELETE);
                      }}
                    >
                      <DeleteIcons />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default UrlItem;
