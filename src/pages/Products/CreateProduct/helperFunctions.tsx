import { ProductType } from '../../../helpers/SharedTypes';

export const createRandomEANNumber: () => number = () => {
    // randomly generates 13digit number
    return Math.floor(Math.random() * 1000000000000 + 1000000000000);
};
export const generateUniqueId: (products: ProductType[]) => number = (products) => {
    if (products.length && products) {
        return products.sort((a, b) => a.id - b.id).slice(-1)[0].id + 1; //sorts by id to get highest id number and +1 to have unique id
    } else {
        return 1;
    }
};

export const handleProductHistory: (id: number, values: ProductType) => void = (id, fieldValues) => {
    const thisProductHistory = {
        // sets initial history of product
        id,
        priceHistory: [[Date.now(), +fieldValues.price]],
        quantityHistory: [],
    };

    const productsHistoryJson = localStorage.getItem('productsHistory');
    const productsHistory = productsHistoryJson !== null ? JSON.parse(productsHistoryJson) : [];

    productsHistory.push(thisProductHistory);

    localStorage.setItem('productsHistory', JSON.stringify(productsHistory));
};
