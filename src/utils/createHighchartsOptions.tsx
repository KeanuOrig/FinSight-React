import Highcharts from 'highcharts';

// Utility function to generate Highcharts options
const createHighchartsOptions = (
  companyName: string | undefined,
  chartData: number[][],
  volumeData: number[][]
): Highcharts.Options => {
    return {
        rangeSelector: {
            selected: 1,
        },
        navigator: {
            series: {
            color: Highcharts.getOptions().colors?.[0],
            },
        },
        title: {
            text: companyName ?? '',
        },
        credits: {
            enabled: false, 
        },
        yAxis: [
            {
                // Primary y-axis for stock price (candlestick chart)
                height: '75%',
                lineWidth: 2,
                resize: {
                    enabled: true,
                },
            },
            {
                // Secondary y-axis for volume
                top: '80%',
                height: '20%',
                lineWidth: 2,
                opposite: true,
            },
        ],
        series: [
            {
                type: "candlestick",
                name: "Stock Price",
                data: chartData,
                color: "red", // Color for falling candles
                upColor: "green", // Color for rising candles
                lineColor: "green", // Border color for rising candles
                upLineColor: "green", // Border color for falling candles
            },
            {
                type: 'column', // Volume series as columns
                name: 'Volume',
                data: volumeData,
                yAxis: 1,
                color: '#7cb5ec',
                tooltip: {
                    valueDecimals: 0,
                },
            },
        ],
    };
};

export default createHighchartsOptions;
