import { useState, useEffect } from "react";

interface FoodCardProps {
  text: string;
  imageSrc: string;
  onCountChange?: (count: number) => void;
}

export default function FoodCard({
  text,
  imageSrc,
  onCountChange,
}: FoodCardProps) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => (c > 0 ? c - 1 : 0));

  useEffect(() => {
    if (onCountChange) onCountChange(count);
  }, [count]);

  return (
    <div className="relative select-none bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-md p-4 flex flex-col items-center space-y-3 transition-all duration-200 overflow-hidden w-fit">
      <img
        src={imageSrc}
        alt={text}
        className="w-24 h-24 rounded-xl object-cover"
      />
      <div className="text-base font-medium text-black dark:text-white text-center  select-none">
        {text}
      </div>

      <div className="relative h-10 flex justify-center items-center min-w-[120px]">
        <button
          className={`bg-[#2aabee] cursor-pointer text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
            count === 0
              ? "opacity-100 w-auto pointer-events-auto"
              : "opacity-0 w-0 pointer-events-none px-0"
          }`}
          onClick={increment}
        >
          Buy
        </button>

        <div
          className={`absolute flex items-center space-x-4 transition-all duration-300 ease-in-out ${
            count > 0
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white cursor-pointer rounded-full w-8 h-8 text-lg font-bold"
            onClick={decrement}
          >
            -
          </button>
          <span className="text-base text-black dark:text-white select-none font-semibold">
            {count}
          </span>
          <button
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white cursor-pointer rounded-full w-8 h-8 text-lg font-bold"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
