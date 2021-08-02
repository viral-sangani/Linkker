import Img from "next/image";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import DeafultProfileImage from "../../../public/static/default_profile_picture.png";
import { FirestoreUserModel } from "../../../services/props";
import { userState } from "../../../store/recoilStore";
import { Button } from "../../common/buttons/Button";
import { TextArea } from "../../common/TextArea";
import { TextField } from "../../common/TextField";

interface Props {}

export const UserInfo: React.FC<Props> = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const user: FirestoreUserModel | undefined = useRecoilValue(userState);

  useEffect(() => {
    setTitle(user?.displayName ?? "");
  }, []);

  return (
    <div className="bg-gray-100 py-6 px-4 lg:mx-5 mt-8 rounded-lg flex flex-col md:flex-row flex-nowrap justify-center md:justify-start items-center md:items-start md:space-x-14 w-full">
      {/* Image Section */}
      <div className="flex flex-col space-y-2 w-4/12 items-center">
        <div className="w-28 h-28">
          <Img src={DeafultProfileImage} className="rounded-full" />
        </div>

        <Button
          varient="primary"
          hover={false}
          onClick={() => {}}
          className="rounded-xl px-10 w-full"
        >
          Pick
        </Button>

        <Button
          varient="secondary"
          hover={false}
          onClick={() => {}}
          className="rounded-xl px-10 w-full"
        >
          Remove
        </Button>
      </div>

      {/* Name and Des Section */}
      <div className="flex flex-col justify-start w-full mt-8 md:mt-0 px-2 md:px-0">
        <div className="flex flex-col items-stretch w-full">
          <span className="font-sourceSansPro font-semibold text-base text-gray-600 mb-1">
            Title
          </span>
          <TextField
            varient="ongray"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col justify-center md:justify-start mt-5">
          <span className="font-sourceSansPro font-semibold text-base text-gray-600 mb-1">
            Description
          </span>
          <TextArea
            value={desc}
            placeholder={"Write something about yourself."}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        <Button
          varient="primary"
          hover={false}
          onClick={() => {}}
          className="rounded-xl px-10 self-end mt-5"
        >
          Save
        </Button>
      </div>
    </div>
  );
};
