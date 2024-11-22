import AtomButton from "@components/global/atoms/AtomButton";
import AtomGenericHeader from "@components/global/atoms/AtomGenericHeader";
import React from "react";
import { Link } from "react-router-dom";

const MoleculeNoStockData: React.FC = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <AtomGenericHeader message={'No Stock Data Available...'}/>
                <Link to={'/'} className="hover:text-gray-300">
                    <AtomButton text={'Go to Home'} color="blue"/>
                </Link>
            </div>
        </>
    );
};

export default MoleculeNoStockData;