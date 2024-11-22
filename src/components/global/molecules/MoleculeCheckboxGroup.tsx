import React from "react";
import { MoleculeCheckboxGroupProps } from "@tstypes/index";
import AtomCheckbox from "../atoms/AtomCheckBox";

const MoleculeCheckboxGroup: React.FC<MoleculeCheckboxGroupProps> = ({ options, onChange }) => {
  return (
    <div className="flex flex-wrap space-x-8 mb-4">
      {options.map(({ id, label, checked }) => (
        <AtomCheckbox
          key={id}
          id={id}
          label={label}
          checked={checked}
          onChange={(checked) => onChange(id, checked)}
        />
      ))}
    </div>
  );
};

export default MoleculeCheckboxGroup;
