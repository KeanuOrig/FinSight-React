import { AtomTextAreaProps } from "@tstypes/index";
import React, { ChangeEvent } from "react";

const AtomTextArea: React.FC<AtomTextAreaProps> = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded-md mt-2"
    />
  );
};

export default AtomTextArea;