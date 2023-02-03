import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export type SimpleCardProps = {
  title: string;
  content: React.ReactNode;
};

const SimpleCard: React.FC<SimpleCardProps> = ({ title, content }) => {
  // Check if wallet is connected. If so, connect.
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col card-shadow h-auto max-w-[750px] min-w-[620px] rounded-3xl bg-black bg-opacity-50 flex justify-center items-center p-3 pb-6">
      <h1 className="font-regular p-5 text-left w-full">{title}</h1>
      <div className="w-full">{content}</div>
    </div>
  );
};

export default SimpleCard;
