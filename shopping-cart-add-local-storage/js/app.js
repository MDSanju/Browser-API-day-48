const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;

    // empty field
    if (name.length === 0) {
        return;
    }
    // display in the UI
    displayProduct(name);

    // add to local storage
    addProductToCart(name);

    // clear field
    nameField.value = '';
}

// create li and put inside the ul
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

// local storage add
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

// add to local storage
const addProductToCart = name => {
    const cart = getCart();

    // set the "name" as the object property, there are two kinds of rules out there about adding obj property(objName.propertyName, and objName['property name']), this is the one. in this code, name is a string, that's why I don't use like ['name'] rather used cart[name]
    if (cart[name]) {
        cart[name] += 1;
    } else {
        cart[name] = 1;
    }

    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// display search items on UI for permanent
const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const product in cart) {
        displayProduct(product);
    }
}

// this function needs to call
displayLocalStorageCart();

// 
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}