const shoppingCart = document.querySelector('#shopping_cart'); //блок
const productList = document.querySelector('#product_ul'); //список
const resultSum = document.querySelector('#productList > p');
const one_icons = document.querySelector('.one_icon');
const productListForm = document.querySelector('#productList_block');
const closeproductListButton = document.querySelector('#close_ProductList_button');
const productList_block = document.querySelector('.productsList_block');
const clearListButton = document.querySelector('#clearList');
const totalSum = getTotalSum(getPrices(productsList));
class Product {
    image;
    title;
    price;
    type;
    size;
    constructor(image, title, price, type, size) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.type = type;
        this.size = size;
    }
    setImage(image) {
        this.image = image;
    }
    setTitle(title) {
        this.title = title;
    }
    setPrice(price) {
        this.price = price;
    }
    setType(type) {
        this.type = type;
    }
    setSize(size) {
        this.size = size;
    }
}

resultSum.textContent = `Итог: ${totalSum}₽`;

one_icons.addEventListener('click', event => {
    productListForm.classList.add('open');
    productList_block.classList.add('productsList_block_open');
    resultSum.innerHTML = `Итог: ${totalSum}₽`;
    document.body.style.overflowY = 'hidden';
    productList.addEventListener('click', event => {
        if(event.target.className == 'deleteElement') {
            console.log(event.target.parentNode);
            event.target.parentNode.parentNode.parentNode.style.display = 'none';
        }
    });
});

closeproductListButton.addEventListener('click', () => {
    productListForm.classList.remove('open');
    productList_block.classList.remove('productsList_block_open');
    document.body.style.overflowY = 'visible';
});

console.log(getTotalSum(getPrices(productsList)));

shoppingCart.addEventListener('click', event => {
    if(event.target.id == 'closeWindow') {
        shoppingCart.style.display = 'none';
    }
});



clearListButton.addEventListener('click', () => {
    localStorage.clear();
    productsList = localStorage.clear();
});

function getSumFromProductList(productList) {
    let sum = 0;
    for(let price of productsList) {
        sum += price.price;
    }
    return sum;
}

function getTotalSum(prices) {
    let sum = 0;
    for(let price of prices) {
        sum += price;
    }
    return sum;
}

function addProductToList(imgUrl, title, price, type, size) {
    productsList.push(new Product(imgUrl, title, price, type, size));
    let item = document.createElement('li');
    item.setAttribute('class', 'prodItem');;
    item.innerHTML = `
    <div class="itemData">
        <img class="productImgInList" src="${imgUrl}"/>
        <div class="decription">
            <p class="desc_text" id="title">${title}</p>
            <p class="desc_text" id="price">${price}₽</p>
            <p class="desc_text" id="type">${type}</p>
            <p class="desc_text" id="size">${size}</p>
        </div>
    <div>
    <div class="deleteElement"></div>`
    productList.appendChild(item);
    console.log(productList.children);   
    console.log('added!');
}
for (let i = 0; i < parseInt(localStorage.getItem('productsCount')); i++) {
    addProductToList(productsList[i].image, productsList[i].title, productsList[i].price, productsList[i].type, productsList[i].size);
    console.log(productsList[i].image, productsList[i].title, productsList[i].price, productsList[i].type, productsList[i].size);
    setTimeout(1000);
}
