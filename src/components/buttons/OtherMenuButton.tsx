import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const OtherMenuButton = () => {
  // Check if wallet is connected. If so, connect.
  useEffect(() => {}, []);

  return (
    <button className="transition ease-in-out h-full rounded-full bg-gray-700 hover:bg-opacity-80 flex justify-center items-center p-3">
      <FontAwesomeIcon className="w-5 h-5" icon={faEllipsis} />
    </button>
  );
};

export default OtherMenuButton;
