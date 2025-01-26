import { products } from "../data/products.js"

export function toDecimal (product){
    return (product.priceCents / 100).toFixed(2);
};