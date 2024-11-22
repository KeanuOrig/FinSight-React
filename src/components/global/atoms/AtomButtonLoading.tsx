import { AtomButtonLoadingProps } from "@tstypes/index";
import React from "react";

const AtomButtonLoading: React.FC<AtomButtonLoadingProps> = ({ onClick, isLoading, children }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-8 rounded-lg focus:outline-none transition duration-300 transform hover:scale-105 mt-4 
        ${isLoading ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
      disabled={isLoading}
    >
      {
        isLoading ? "Generating . . . ." : children}
      
    </button>
  );
}
export default AtomButtonLoading;