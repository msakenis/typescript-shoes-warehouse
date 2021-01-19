import { ProductType, ProductHistoryType } from './SharedTypes';

export const getChosenProduct = (id: number, products: ProductType[]): ProductType => {
    const product = products.filter((product) => product.id === id)[0];

    // this filter just to emulate db, ussually you fetch one product only. Back-End must do the most of the job
    return product;
};

export const numberInputValidation = (value: string): boolean => {
    const re = /^[0-9\b]+$/;
    return value === '' || re.test(value);
};

export const priceInputValidation = (value: string): boolean => {
    const re = /[+]?\d+(?:[.,]\d+)?/;
    return value === '' || re.test(value);
};

export const changeInputValidation = (value: string): boolean => {
    const re = /^(-?)[\d]*$/;
    return value === '' || re.test(value);
};

export const getProducts = (): ProductType[] => {
    const productsJson = localStorage.getItem('products');
    const currentProducts = productsJson !== null ? JSON.parse(productsJson) : [];

    return currentProducts;
};
export const getProductsHistory = (): ProductHistoryType[] => {
    const productsHistoryJson = localStorage.getItem('productsHistory');
    const currentProductsHistory = productsHistoryJson !== null ? JSON.parse(productsHistoryJson) : [];

    return currentProductsHistory;
};
