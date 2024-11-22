import { MessageProps } from "@tstypes/index";
import React from "react";

const AtomGenericHeader: React.FC<MessageProps> = ({ message }) => {
  return (
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">{message}</h2>
  );
};

export default AtomGenericHeader;


