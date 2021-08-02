import Img from "next/image";
import { IconsPalletData } from "../../helper/constants";

const IconsGrid: React.FC = () => {
  return (
    <div className="px-4 w-full mt-3">
      <label className="font-sourceSansPro font-semibold text-xl">
        Choose Icon for your Link
      </label>
      <div className="grid grid-cols-8 gap-4 mt-4">
        {IconsPalletData.map((icon) => {
          return (
            <div
              key={icon.index}
              className={`py-1 flex flex-col items-center cursor-pointer border-2  rounded-xl ${`border-white`}`}
              onClick={() => {}}
            >
              <Img
                key={icon.index}
                src={icon.url}
                height={60}
                width={60}
                quality={100}
              />
              <span className="font-sourceSansPro text-sm text-gray-500">
                {icon.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconsGrid;
