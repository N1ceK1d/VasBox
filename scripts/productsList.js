const shoppingCart = document.querySelector('#shopping_cart'); //блок
const productList = document.querySelector('#product_ul'); //список
const productList2 = document.querySelector('#product_ul2');
const resultSum = document.querySelector('#productList > p');
const resultSum2 = document.querySelector("#productsListBox > p");
const one_icons = document.querySelector('.one_icon');
const productListForm = document.querySelector('#productList_block');
const closeproductListButton = document.querySelector('#close_ProductList_button');
const productList_block = document.querySelector('.productsList_block');
const clearListButton = document.querySelector('#clearList');
let totalSum = getTotalSum(getPrices(productsList));
class Product {
    image;
    title;
    price;
    size;
    tshirt;
    constructor(image, title, price, size, tshirt) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.size = size;
        this.tshirt = tshirt;
    }
}

resultSum.textContent = `Итог: ${totalSum}₽`;
resultSum2.textContent = `Итог: ${totalSum}₽`;

one_icons.addEventListener('click', event => {
    productListForm.classList.add('open');
    productList_block.classList.add('productsList_block_open');
    resultSum.innerHTML = `Итог: ${totalSum}₽`;
    document.body.style.overflowY = 'hidden';
    productList.addEventListener('click', event => {
        if(event.target.className == 'deleteElement') {
            removeElementFromLists(event);
            productList2.innerHTML = productList.innerHTML;
        }
    });
});

productList2.addEventListener('click', event => {
    if(event.target.className == 'deleteElement') {
        removeElementFromLists(event);
        productList.innerHTML = productList2.innerHTML;
    }
});

function removeElementFromLists(event) {
    event.target.parentNode.parentNode.parentNode.remove();
    let currentPrice = parseInt(event.target.parentNode.parentNode.parentNode.querySelector('#price').textContent);
    totalSum = getTotalSum(getPrices(productsList)) - currentPrice;
    resultSum.textContent = `Итог: ${totalSum}₽`;
    resultSum2.textContent = `Итог: ${totalSum}₽`;
    let one_icons = document.querySelectorAll('.one_icon');
    let shoppingBagCounter = document.querySelector('#shopping_bag_block');
    shoppingBagCounter.textContent = localStorage.getItem('productsCount') - 1;
    if(parseInt(shoppingBagCounter.textContent) == 0) {
        for (icon of one_icons) {
            icon.style.display = 'none';
        }
        localStorage.clear();
        productsList = [];
    } 
}

closeproductListButton.addEventListener('click', () => {
    productListForm.classList.remove('open');
    productList_block.classList.remove('productsList_block_open');
    document.body.style.overflowY = 'visible';
});

shoppingCart.addEventListener('click', event => {
    if(event.target.id == 'closeWindow') {
        shoppingCart.style.display = 'none';
    }
});

clearListButton.addEventListener('click', () => {
    localStorage.clear();
    productsList = localStorage.clear();
});

function getTotalSum(prices) {
    let sum = 0;
    for(let price of prices) {
        sum += price;
    }
    return sum;
}

function addProductToList(imgUrl, title, price, size, tshirt) {
    //productsList.push(new Product(imgUrl, title, price, size));
    let item = document.createElement('li');
    let item2 = document.createElement('li');
    item.setAttribute('class', 'prodItem');
    item2.setAttribute('class', 'prodItem');
    item.innerHTML = `
    <div class="itemData">
        <img class="productImgInList" src="${imgUrl}"/>
        <div class="decription">
            <p class="desc_text" id="title">${title}</p>
            <p class="desc_text" id="price">${price}₽</p>
            <p class="desc_text" id="size">${size}</p>
            <p class="desc_text" id="t_shirt">${tshirt}</p>
        </div>
    <div>
    <div class="deleteElement"></div>`
    item2.innerHTML = `
    <div class="itemData">
        <img class="productImgInList" src="${imgUrl}"/>
        <div class="decription">
            <p class="desc_text" id="title">${title}</p>
            <p class="desc_text" id="price">${price}₽</p>
            <p class="desc_text" id="size">${size}</p>
            <p class="desc_text" id="t_shirt">${tshirt}</p>
        </div>
    <div>
    <div class="deleteElement"></div>`
    productList.appendChild(item);
    productList2.appendChild(item2);
}

for (let i = 0; i < parseInt(localStorage.getItem('productsCount')); i++) {
    addProductToList(productsList[i].image, productsList[i].title, productsList[i].price, productsList[i].size, productsList[i].tshirt);
    setTimeout(1000);
}