import React, { useState } from "react";
import MoleculeTextAreaWithCondition from "../molecules/MoleculeTextAreaWithCondition";
import AtomButtonLoading from "@components/global/atoms/AtomButtonLoading";
import MoleculeCheckboxGroup from "@components/global/molecules/MoleculeCheckboxGroup";
import AtomGenericHeader from "@components/global/atoms/AtomGenericHeader";
import { OrganismFiltersSectionProps } from "@tstypes/index";

const OrganismFiltersSection: React.FC<OrganismFiltersSectionProps> = ({ generateAnalysis, isLoading }) => {
    const [includeRSI, setIncludeRSI] = useState(false);
    const [includeVolume, setIncludeVolume] = useState(false);
    const [includeSentiment, setIncludeSentiment] = useState(false);
    const [newsInput, setNewsInput] = useState('');
    const [includePsychologicalNumbers, setIncludePsychologicalNumbers] = useState(false);

    const handleCheckboxChange = (id: string, checked: boolean) => {
        switch (id) {
            case "RSI":
                setIncludeRSI(checked);
                break;
            case "Volume":
                setIncludeVolume(checked);
                break;
            case "Sentiment":
                setIncludeSentiment(checked);
                break;
            case "PsychologicalNumbers":
                setIncludePsychologicalNumbers(checked);
                break;
            default:
                break;
        }
    };

    const checkboxOptions = [
        { id: "RSI", label: "RSI", checked: includeRSI },
        { id: "Volume", label: "Volume", checked: includeVolume },
        { id: "Sentiment", label: "News Sentiment", checked: includeSentiment },
        { id: "PsychologicalNumbers", label: "Psychological Price Levels", checked: includePsychologicalNumbers },
    ];
  
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <AtomGenericHeader message={'Customize Your Analysis'}/>
                <MoleculeCheckboxGroup options={checkboxOptions} onChange={handleCheckboxChange} />
                <MoleculeTextAreaWithCondition
                    isVisible={includeSentiment}
                    value={newsInput}
                    onChange={setNewsInput}
                />
                <AtomButtonLoading onClick={generateAnalysis} isLoading={isLoading}>
                    Generate Analysis
                </AtomButtonLoading>
            </div>
        </>
    );
};

export default OrganismFiltersSection;
