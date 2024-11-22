import React, { useEffect, useState } from "react";
import TemplateMainLayout from "@components/layout/template/TemplateMainLayout";
import OrganismStockList from "../organisms/OrganismStockList";
import { fetchStockList } from "api/stocks";
import { Stock } from "@tstypes/stock";

const PageStockList: React.FC = () => {

  const [stockList, setStockList] = useState<Stock[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const loadStocks = async () => {
      try {
        const data = await fetchStockList();
        setStockList(data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    loadStocks();
  }, []);

  const onSearch = (term: string) => setSearchTerm(term);

  const filteredStockList = stockList.filter(
    (stock) =>
      stock?.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock?.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock?.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TemplateMainLayout>
      <OrganismStockList searchTerm={searchTerm} onSearch={onSearch} stockList={filteredStockList} />
    </TemplateMainLayout>
  );
}

export default PageStockList;
