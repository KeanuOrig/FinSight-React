import React from "react";

const MoleculeStockHeader: React.FC<{ symbol: string | undefined }> = ({ symbol }) => {
      
    return (
        <>
          <div className="text-center mb-12 bg-gray-50 p-6">
            <h1 className="text-4xl font-bold text-gray-800">Stock Analysis AI</h1>
            <p className="text-xl text-gray-600 mt-2">Get real-time stock analysis and recommendations for {symbol}.</p>
          </div>
        </>
    )
}

export default MoleculeStockHeader