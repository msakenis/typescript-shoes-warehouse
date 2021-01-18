import { ProductType } from './SharedTypes';

export const getChosenProduct = (id: number, products: ProductType[]): ProductType => {
    const product = products.filter((product) => product.id === id)[0];

    // this filter just to emulate db, ussually you fetch one product only. Back-End must do the most of the job
    return product;
};

export const numberInputValidation = (value: string): boolean => {
    const re = /^[0-9\b]+$/;
    return value === '' || re.test(value);
};
