import { SearchBarProps } from "@tstypes/index";
import React from "react";

const MoleculeSearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch?.(e.target.value);
    };

    return (
        <div className="mb-4">
        <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border rounded-md"
            placeholder="Search for stocks..."
        />
        </div>
    );
};

export default MoleculeSearchBar;
