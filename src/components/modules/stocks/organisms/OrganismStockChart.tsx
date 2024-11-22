import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import React from "react";
import { StockData, StockDataProps } from "@tstypes/index";
import createHighchartsOptions from "@utils/createHighchartsOptions";

const OrganismStockChart: React.FC<StockDataProps> = ({ stockData, symbol }) => {
  
  const chartDataAndVolume = stockData?.data?.map((stock: StockData) => ({
    candlestick: [
      stock.date,            // Timestamp (x-axis value)
      stock.open_price,      // Open price
      stock.high_price,      // High price
      stock.low_price,       // Low price
      stock.close_price,     // Close price
    ],
    volume: [
      stock.date,            // Timestamp (x-axis value)
      stock.volume,          // Volume data for each stock
    ]
  }));

  const chartData: number[][] = chartDataAndVolume?.map((data) => data.candlestick) || [[0, 0, 0, 0, 0]];
  const volumeData: number[][] = chartDataAndVolume?.map((data) => data.volume) || [[0, 0]];
  const options: Highcharts.Options = createHighchartsOptions(symbol, chartData, volumeData)

  return (
    <HighchartsReact highcharts={Highcharts} options={options} constructorType={"stockChart"} />
  )
}

export default OrganismStockChart
