const products = document.querySelector('#products');
const addButton = document.querySelector('#addButton');
const addingForm = document.querySelector('#window_block');
const popupAdder = document.querySelector('.adder');
const closeWindowButton = document.querySelector('#closeWindow');

let productsList = []; //массив товаров

updateProductsInShoppingBag();

products.addEventListener('click', event => {
    if (event.target.className == 'add_to_cart') {

        closeWindowButton.addEventListener('click', () => {
            addingForm.classList.remove('open');
            popupAdder.classList.remove('adder_open');
        });

        addingForm.classList.add('open');
        popupAdder.classList.add('adder_open');

        let boxTitle = event.target.parentNode.children[0].textContent; //название бокса
        let boxPrice = event.target.parentNode.children[1].textContent; //цена бокса
        let product = addProduct(boxTitle, parseInt(boxPrice.match(/\d+/))); //добавление товара 
        productsList.push(product);                                          //в массив товаров
        localStorage.setItem("count", productsList.length);
     } else {
        return;
     }
});

updateProductsInShoppingBag();

function saveToLocalStorage(key, value) {

}

function updateProductsInShoppingBag() {
    if(localStorage.getItem('count') > 0) {
        let one_icons = document.querySelectorAll('.one_icon');
        for (icon of one_icons) {
            icon.style.display = 'block';
        }
        let shoppingBagCounter = document.querySelector('#shopping_bag_block');
        shoppingBagCounter.innerHTML = localStorage.getItem('count');
    }
}

function addProduct(title, price) {
    return {
        title,
        price
    }
}

function getPrices(prices) { //получаем массив цен
    let pricesList = [];
    for (price of prices) {
        pricesList.push(parseInt(price.price));
    } 
    return pricesList;
}

function getSum(prices) {
    const sum = 0;
    const resultSum = prices.reduce((previousValue, currentValue) => 
        previousValue + currentValue,
        sum);
    return resultSum;
}

