
import { BUY_RATING } from "@constants/app/constants";
import { OrganismStockAiContentProps } from "@tstypes/index";
import React from "react";
import AtomAiBuyRating from "../atoms/AtomAiBuyRating";
import AtomAiPreAnalysis from "../atoms/AtomAiPreAnalysis";
import AtomAiPostAnalysis from "../atoms/AtomAiPostAnalysis";

const MoleculeAiAnalysis: React.FC<OrganismStockAiContentProps> = ({ analysis, buyRating}) => {

    return (
        <div>
            <div id="analysisContent" className="text-gray-600 mb-6">
            {buyRating != BUY_RATING.NONE && (
                <AtomAiBuyRating buyRating={buyRating} />
            )}
            {analysis ? <AtomAiPostAnalysis analysis={analysis} /> : <AtomAiPreAnalysis />}
            </div> 
        </div>
    );
};

export default MoleculeAiAnalysis;

