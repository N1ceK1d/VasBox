const products = document.querySelector('#products');

let productsList = [];

products.addEventListener('click', event => {
    if (event.target.className == 'add_to_cart') {
        let boxTitle = event.target.parentNode.children[0].textContent;
        let boxPrice = event.target.parentNode.children[1].textContent;
        let product = addProduct(boxTitle, parseInt(boxPrice.match(/\d+/)));
        productsList.push(product);
        if(productsList.length > 0) {
            let one_icons = document.querySelectorAll('.one_icon');
            for (icon of one_icons) {
                icon.style.display = 'block';
            }
            let shoppingBagCounter = document.querySelector('#shopping_bag_block');
            shoppingBagCounter.innerHTML = productsList.length;
        }
    } else {
        return;
    }
})

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

