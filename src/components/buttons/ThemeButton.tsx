import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeButton = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  useEffect(() => {}, []);

  return (
    <div>
      {isLightMode ? (
        <button
          className="transition ease-in-out hover:bg-opacity-80 h-full p-3 rounded-full bg-gray-700 flex justify-center items-center"
          onClick={() => setIsLightMode(!isLightMode)}
        >
          <FontAwesomeIcon className="w-5 h-5" icon={faMoon} />
        </button>
      ) : (
        <button
          className="transition ease-in-out hover:bg-opacity-80 h-full p-3 rounded-full bg-off_white flex justify-center items-center"
          onClick={() => setIsLightMode(!isLightMode)}
        >
          <FontAwesomeIcon className="w-5 h-5 text-black" icon={faSun} />
        </button>
      )}
    </div>
  );
};

export default ThemeButton;
