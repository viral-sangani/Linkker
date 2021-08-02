import { Switch } from "@headlessui/react";
import Img from "next/image";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { InlineInputEdit } from "react-inline-input-edit";
import { UserUrlProps } from "../../../services/props";
import { AnalyticsIcons } from "../../common/icons/analytics";
import { CalendarIcons } from "../../common/icons/calendar";
import { DeleteIcons } from "../../common/icons/delete";
import { ImageIcon } from "../../common/icons/image";
import { PencilIcon } from "../../common/icons/pencil";
import { StarIcon } from "../../common/icons/star";
import { VerticalDotsIcon } from "../../common/icons/vertical-dots";
import AnalyticsModel from "./Models/AnalyticsModel";
import DeleteModel from "./Models/DeleteModel";
import ImageModel from "./Models/ImageModel";
import PriorityModel from "./Models/PriorityModel";
import ScheduleUrlModel from "./Models/ScheduleUrlModel";

enum ModelEnum {
  DELETE,
  SCHEDULE,
  ANALYTICS,
  PRIORITY,
  IMAGE,
}

interface Props {
  keyId: string;
  userUrl: UserUrlProps;
}

const UrlItem: React.FC<Props> = ({ keyId, userUrl }) => {
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
          className="relative transition-height duration-500 ease-in-out  py-3"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <DeleteModel
            isOpen={openModel === ModelEnum.DELETE}
            closeModal={closeModel}
          />

          <ScheduleUrlModel
            isOpen={openModel === ModelEnum.SCHEDULE}
            closeModal={closeModel}
          />

          <AnalyticsModel
            isOpen={openModel === ModelEnum.ANALYTICS}
            closeModal={closeModel}
          />

          <PriorityModel
            isOpen={openModel === ModelEnum.PRIORITY}
            closeModal={closeModel}
          />

          <ImageModel
            isOpen={openModel === ModelEnum.IMAGE}
            closeModal={closeModel}
          />

          <div className="absolute top-8 right-12">
            <Switch
              checked={isActive}
              onChange={setIsActive}
              className={`${
                isActive ? "bg-green-500" : "bg-gray-200"
              } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-0`}
            >
              <span className="sr-only">Enable Link</span>
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
                    <div className="mr-3">
                      {userUrl.image && (
                        <Img src={userUrl.image} height={60} width={60} />
                      )}
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row items-center">
                        <InlineInputEdit
                          text={userUrl.title}
                          inputWidth="80%"
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
                      <div className="flex flex-row items-center pt-1">
                        <InlineInputEdit
                          text={userUrl.url}
                          inputWidth="80%"
                          inputHeight="25px"
                          inputMaxLength={50}
                          inputClassName="px-2 py-1 text-grey-200"
                          onFocus={_handleFocus}
                          onFocusOut={_handleFocusOut}
                          isEditing={isEditing}
                        />
                        {!isEditing && <PencilIcon onClick={() => {}} />}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start">
                    <div
                      className="mr-1 cursor-pointer"
                      onClick={() => {
                        setOpenModel(ModelEnum.IMAGE);
                      }}
                    >
                      <ImageIcon />
                    </div>
                    <div
                      className="mr-1 cursor-pointer"
                      onClick={() => {
                        setOpenModel(ModelEnum.PRIORITY);
                      }}
                    >
                      <StarIcon />
                    </div>
                    <div
                      className="mr-1 cursor-pointer"
                      onClick={() => {
                        setOpenModel(ModelEnum.ANALYTICS);
                      }}
                    >
                      <AnalyticsIcons />
                    </div>
                    <div
                      className="mr-1 cursor-pointer"
                      onClick={() => {
                        setOpenModel(ModelEnum.SCHEDULE);
                      }}
                    >
                      <CalendarIcons />
                    </div>
                    <div
                      className="mr-1 cursor-pointer"
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
