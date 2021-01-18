export const priceHistoryOptions = (priceHistory: number[][], productName: string): Record<string, unknown> => {
    return {
        chart: {
            type: 'line',
        },
        title: {
            text: 'Price History',
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Date',
            },
        },
        yAxis: {
            title: {
                text: `Price (€)`,
            },
            min: 0,
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                },
                enableMouseTracking: false,
            },
        },
        series: [
            {
                name: `${productName} price change`,
                data: priceHistory,
            },
        ],
    };
};
export const quantityHistoryOptions = (quantityHistory: number[][], productName: string): Record<string, unknown> => {
    return {
        chart: {
            type: 'line',
        },
        title: {
            text: 'Quantity History',
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Date',
            },
        },
        yAxis: {
            title: {
                text: `Quantity (pcs)`,
            },
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                },
                enableMouseTracking: false,
            },
        },
        series: [
            {
                name: `${productName} quantity change`,
                data: quantityHistory,
            },
        ],
    };
};
