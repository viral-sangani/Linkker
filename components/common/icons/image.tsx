import { useState } from "react";

export const ImageIcon: React.FC = () => {
  const [color, setColor] = useState("#888888");
  return (
    <div
      className="w-8 h-8 hover:bg-green-100 rounded-md flex justify-center items-center cursor-pointer"
      onMouseEnter={() => {
        setColor("#226504");
      }}
      onMouseLeave={() => {
        setColor("#888888");
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 22, height: 22 }}
        fill="none"
        viewBox="0 0 24 24"
        stroke={color}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
};
