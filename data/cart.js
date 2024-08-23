export let cart = JSON.parse(localStorage.getItem('cart')) || [{
    productid: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
}, {
    productid: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}];

function savetostorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function productid(val) {
    let matchingItem;

    cart.forEach((item) => {
        if (item.productid === val) {
            matchingItem = item;
        }
    })
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productid: val,
            quantity: 1
        });
    }
    savetostorage()
}
export function cartquantity() {

    let cartquantity = 0;
    cart.forEach((item) => {
        cartquantity += item.quantity;
    })
    console.log(cartquantity);
    document.querySelector('.js-cart').innerHTML = cartquantity;
}
export function removecrat(dataid) {
    let newaa = [];
    cart.forEach((item) => {
        if (item.productid !== dataid) {
            newaa.push(item);
        };
    });
    cart = newaa;
    savetostorage();
}