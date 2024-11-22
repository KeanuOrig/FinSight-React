import React from "react";
import AtomTextArea from "@components/global/atoms/AtomTextArea";

interface MoleculeTextAreaWithConditionProps {
  isVisible: boolean;
  value: string;
  onChange: (value: string) => void;
}

const MoleculeTextAreaWithCondition: React.FC<MoleculeTextAreaWithConditionProps> = ({ isVisible, value, onChange }) => {
  if (!isVisible) return null;

  return (
    <div className="w-full">
      <AtomTextArea
        value={value}
        onChange={onChange}
        placeholder="Enter stock news for sentiment analysis"
      />
    </div>
  );
};

export default MoleculeTextAreaWithCondition;
