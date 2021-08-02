import { useState } from "react";

export const CalendarIcons: React.FC = () => {
  const [color, setColor] = useState("#888888");
  return (
    <div
      className="w-8 h-8 hover:bg-purple-100 rounded-md flex justify-center items-center cursor-pointer"
      onMouseEnter={() => {
        setColor("#6d28d9");
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
};
