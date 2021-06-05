import { ChangeEventHandler } from "react";

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: "text" | "password";
}
const TextField: React.FC<Props> = ({ onChange, value, type }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      className="px-3 py-1 font-sourceSansPro text-lg bg-gray-100 hover:bg-white focus:bg-white rounded-lg border-4 hover:border-4 border-transparent hover:border-default-200 focus:border-default-200 outline-none focus:outline-none focus:ring w-full pr-10 transition-all duration-500 ring-transparent"
    />
  );
};

export default TextField;