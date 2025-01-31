export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];

export function addToCart (productId){
    let similarItem;
    cart.forEach((item) => {
        if(productId === item.productId){
            similarItem = item;
        }
    });
    let quantitySelector = document.querySelector(`.js-selector-quantity-${productId}`);
    let quantity = Number(quantitySelector.value);
    if(similarItem){
        similarItem.quantity += quantity;
    }else{
        cart.push({
            productId: productId,
            quantity: quantity
        });
    }
    console.log(quantitySelector);
    console.log(cart);
    console.log(productId);
    
}