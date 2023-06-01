import { useState } from "react";

interface BarProps {
  amount: number;
  day: string;
}

const getDayOfTheWeek = () => {
  const daysOfTheWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  return daysOfTheWeek[new Date().getDay()];
};

const currentDay = getDayOfTheWeek();

const Bar: React.FC<BarProps> = ({ amount, day }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="text-center">
      <div
        className={`mb-2 hidden h-10 rounded-md bg-dark-brown p-2 text-very-pale-orange lg:block ${
          isHovered ? "" : "invisible"
        }`}
      >
        ${amount / 100}
      </div>

      <div
        className={`mb-2 w-8 cursor-pointer rounded hover:opacity-75 lg:mx-auto lg:w-[50px] ${
          day === currentDay ? "bg-cyan" : "bg-soft-red"
        }`}
        style={{ height: amount / 24 + "px" }} // Refactor this to remove the magic number and use tailwindcss
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>

      <div className="text-medium-brown">{day}</div>
    </div>
  );
};

export default Bar;
