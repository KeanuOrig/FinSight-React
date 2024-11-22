import { OrganismStockAiContentProps } from "@tstypes/index";
import React from "react";
import AtomGenericHeader from "@components/global/atoms/AtomGenericHeader";
import MoleculeAiLoading from "../molecules/MoleculeAiLoading";
import MoleculeAiAnalysis from "../molecules/MoleculeAiAnalysis";



const OrganismStockAiContent: React.FC<OrganismStockAiContentProps> = ({ isLoading, analysis, buyRating }) => {

  return (
        <div className="mt-6 flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <AtomGenericHeader message={'Analysis & Buy Rating'}/>
            {isLoading ? <MoleculeAiLoading /> : <MoleculeAiAnalysis analysis={analysis} buyRating={buyRating} isLoading={isLoading} />}
          </div>
  );
};

export default OrganismStockAiContent;
