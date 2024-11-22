import React from "react";
import { Stock, StockListProps } from "@tstypes/index";
import AtomTableData from "../atoms/AtomTableData";
import AtomTableHeader from "../atoms/AtomTableHeader";
import AtomButtonLink from "../atoms/AtomButtonLink";

const MoleculeStockTable: React.FC<StockListProps> = ({ stockList }) => {

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-200">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <AtomTableHeader message = {'Symbol'}/>
                            <AtomTableHeader message = {'Company Name'}/>
                            <AtomTableHeader message = {'Industry'}/>
                            <AtomTableHeader message = {'Actions'}/>
                        </tr>
                    </thead>
                    <tbody>
                    {stockList.map(function(stock: Stock, index) {
                        return (
                            <tr
                                key={stock?.id}
                                className={`${
                                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                                } hover:bg-gray-200`}
                            >
                                <AtomTableData message = {stock?.symbol}/>
                                <AtomTableData message = {stock?.company_name}/>
                                <AtomTableData message = {stock?.industry}/>
                                <AtomButtonLink to={`/stock/${stock?.symbol}`} label={'View Details'} />
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MoleculeStockTable