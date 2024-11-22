import { AtomCheckboxProps } from "@tstypes/index";
import React, { ChangeEvent } from "react";

const AtomCheckbox: React.FC<AtomCheckboxProps> = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
        className="mr-2"
      />
      <label htmlFor={id} className="text-gray-700">{label}</label>
    </div>
  );
};

export default AtomCheckbox;
