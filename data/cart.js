export const cart = [];

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