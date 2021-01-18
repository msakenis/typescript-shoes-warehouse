export interface ProductType {
    id: number;
    name: string;
    type: string;
    ean: number;
    color: string;
    weight: number;
    active: boolean;
    price: number;
    currentQnty: number;
}
export interface ProductHistoryType {
    id: number;
    priceHistory: number[][];
    quantityHistory: number[][];
}
