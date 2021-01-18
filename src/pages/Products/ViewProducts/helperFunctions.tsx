import { ProductHistoryType, ProductType } from '../../../helpers/SharedTypes';

export const showUpdateBtn = (
    enteredQntyValues: Record<number, number | string>,
    enteredPriceValues: Record<number, number | string>,
    data: ProductType[],
): boolean => {
    const qntyValueArr = Object.values(enteredQntyValues).map(Number);
    const priceValueArr = Object.values(enteredPriceValues).map(Number);
    const defaultPriceArr = Object.values(setDefaultPrices(data)).map(Number);

    return (
        data &&
        !(data.length === 0) && // if no data do not show update button
        !qntyValueArr.includes(NaN) && // case if "-" entered and clicked update
        !priceValueArr.includes(NaN) && // case if "-" entered and clicked update
        (!qntyValueArr.every((item) => item === 0) || //check if all values 0 then no need to show button either
            !(JSON.stringify(priceValueArr) === JSON.stringify(defaultPriceArr))) && // check if any changes were made to prices and show button if yes
        !priceValueArr.some((item) => item < 0) // if any of prices are negative hides the update button
    );
};
export const setDefaultPrices = (data: ProductType[]): Record<number, number | string> => {
    if (data) {
        const dataObj = {};
        data.map((item) => Object.assign(dataObj, { [item.id]: item.price }));
        return dataObj;
    } else {
        return {};
    }
};

export const handleDeleteHistory = (id: number): void => {
    const productsHistoryJson = localStorage.getItem('productsHistory');
    const productsHistory = productsHistoryJson !== null ? JSON.parse(productsHistoryJson) : [];

    const updatedProductHistory = productsHistory.filter((product: ProductType) => product.id !== id);
    localStorage.setItem('productsHistory', JSON.stringify(updatedProductHistory));
};

export const handleNewHistory = (
    productHistory: ProductHistoryType[],
    product: ProductType,
    type: string,
    enteredQuantity?: number | string,
): ProductHistoryType[] => {
    let historyArr: number[][] = [];
    let historyValue: number;
    return productHistory.map((item: ProductHistoryType) => {
        if (item.id === product.id) {
            if (type === 'priceHistory') {
                historyValue = +product.price;
                historyArr = item.priceHistory;
            } else if (type === 'quantityHistory' && enteredQuantity) {
                historyArr = item.quantityHistory;
                historyValue = +enteredQuantity;
            }

            historyArr.push([Date.now(), historyValue]);

            //keep only last 5 records
            if (historyArr.length > 5) {
                item = { ...item, [type]: historyArr.slice(-5) };
            }
        }
        return item;
    });
};

export const changeInputValidation = (value: string): boolean => {
    const re = /^(-?)[\d]*$/;
    return value === '' || re.test(value);
};

export const priceInputValidation = (value: string): boolean => {
    const re = /[+-]?\d+(?:[.,]\d+)?/;
    return value === '' || re.test(value);
};

export const objectStringtoNum = (object: Record<number, string | number>): Record<number, number> => {
    const updatedObj = JSON.parse(JSON.stringify(object)); // deep clone object
    Object.keys(updatedObj).forEach((key) => {
        updatedObj[+key] = +updatedObj[+key];
    });
    return updatedObj;
};
