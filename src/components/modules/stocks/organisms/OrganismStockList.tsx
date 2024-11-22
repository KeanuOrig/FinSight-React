import React from "react";
import { StockListProps } from "@tstypes/index";
import MoleculeStockTable from "../molecules/MoleculeStockTable";
import MoleculeSearchBar from "../molecules/MoleculeSearchBar";

const OrganismStockList: React.FC<StockListProps> = ({ stockList, onSearch, searchTerm }) => {
      
    return (
        <>
          <MoleculeSearchBar searchTerm={searchTerm} onSearch={onSearch} />
          <MoleculeStockTable stockList={stockList} />
        </>
    )
}

export default OrganismStockList