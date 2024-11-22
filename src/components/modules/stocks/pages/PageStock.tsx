import React, { useEffect, useState } from "react";
import TemplateMainLayout from "@components/layout/template/TemplateMainLayout";
import OrganismStockChart from "../organisms/OrganismStockChart";
import MoleculeStockHeader from "../molecules/MoleculeStockHeader";
import { fetchStockData, fetchStockPrediction } from "api/stocks";
import { BuyRating, Stock } from "@tstypes/index";
import { useParams } from "react-router-dom";
import OrganismStockAiContent from "../organisms/OrganismStockAiContent";
import OrganismFiltersSection from "../organisms/OrganismFiltersSection";
import MoleculeNoStockData from "../molecules/MoleculeNoStockData";

const PageStock: React.FC = () => {

  const [stockData, setStockData] = useState<Stock>(null);
  const { symbol } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState('');
  const [buyRating, setBuyRating] = useState<BuyRating>('None');

  useEffect(() => {
    
    const loadStockData = async (symbol: string) => {
      try {
        const data = await fetchStockData(symbol);
        setStockData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    symbol ? loadStockData(symbol) : null
    
  }, [symbol]);

  const generateAnalysis = async () => {
    try {
      setIsLoading(true);
      if (symbol) {
        const data = await fetchStockPrediction(symbol);
        console.log(data)
        setIsLoading(false);
        setAnalysis(data.prediction);
        setBuyRating(data.rating);
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching data:', error);
    }
  }

  return (
    <TemplateMainLayout>
      <MoleculeStockHeader symbol={symbol} />
      <OrganismStockChart stockData={stockData} symbol={symbol}/>
      <div className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6">
          {stockData && stockData.data && stockData.data.length > 0  ? (
            <>
              <OrganismFiltersSection 
                generateAnalysis={generateAnalysis} 
                isLoading={isLoading} 
                analysis={analysis} 
                buyRating={buyRating} 
              />  
              <OrganismStockAiContent 
                isLoading={isLoading} 
                analysis={analysis} 
                buyRating={buyRating} 
              />
            </>
          ) : (
            <MoleculeNoStockData />
          )}
        </div>
      </div>
    </TemplateMainLayout>
  )
};

export default PageStock;
