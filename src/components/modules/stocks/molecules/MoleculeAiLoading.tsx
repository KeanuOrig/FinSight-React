import AtomLoading from "@components/global/atoms/AtomLoading";
import React from "react";

const MoleculeAiLoading: React.FC = () => {

    return (
      <div className="flex flex-col justify-center items-center space-y-4 p-8">
        <div className="flex justify-center items-center">
          <AtomLoading />
        </div>
        <div className="text-lg font-semibold text-gray-700">AI is Analyzing...</div>
        <div className="text-sm text-gray-500">Please wait while we gather insights.</div>
      </div>
    );
};

export default MoleculeAiLoading;
