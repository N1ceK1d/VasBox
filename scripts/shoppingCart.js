const showCartBtn = document.querySelector('#shopping_cart_icon');
const shoppingCart = document.querySelector('#shopping_cart_block');
const close = document.querySelector('.close');
const productList = document.querySelector('#product_list');
const count = document.querySelector('#product_counter');
const productsGrid = document.querySelector('#products');
const resultSum = document.querySelector('#totalSum');
const selectType = document.querySelector('#box_type_block');
const boxTypeBlock = document.querySelector('#box_type');
const addButton = document.querySelector('#box_type button');

let products = [];
let productsCount = products.length;
let totalSum = findTotalSum(products);

products = JSON.stringify(localStorage.getItem('products'));
count.textContent = productsCount;
resultSum.textContent = totalSum;

if (productsCount > 0) {
    document.querySelector('#shopping_cart_icon').style.display = 'block';
} else {
    document.querySelector('#shopping_cart_icon').style.display = 'none';
}

showCartBtn.addEventListener('click', () => {
    shoppingCart.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
    shoppingCart.style.display = 'none';
    document.body.style.overflow = 'auto';
})

productList.addEventListener('click', (event) => {
    if(event.target.className == 'remove_item') {
        event.target.parentNode.style.display = 'none';
    }
});



productsGrid.addEventListener('click', (event) => {
    if(event.target.className == 'adding_button') {
        console.log('hi');
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        selectType.style.display = 'block';
        
        if(event.target.parentNode.querySelector('.product_title').textContent == 'Стиль') {
            boxTypeBlock.innerHTML = `
            <p id="close_id" class="close">X</p>
            <div>
                <label for="">Обычный</label>
                <input type="radio" name="type" value="обычный">
                <label for="">Большой</label>
                <input type="radio" name="type" value="большой">
            </div>
            <br>
            <div>
                <label for="">S</label>
                <input type="radio" name="size" value="S">
                <label for="">M</label>
                <input type="radio" name="size" value="M">
                <label for="">L</label>
                <input type="radio" name="size" value="L">
            </div>
            <button id="add">Добавить</button>`;
        } else {
            boxTypeBlock.innerHTML = `
            <p id="close_id" class="close close2">X</p>
            <div>
                <label for="">Обычный</label>
                <input type="radio" name="type" value="обычный">
                <label for="">Большой</label>
                <input type="radio" name="type" value="большой">
            </div>
            <button id="add">Добавить</button>`;
        }   
        
    }
});

function addProductToList(product) {
    products.push(product);
    localStorage.setItem('products', JSON.parse(products));
    localStorage.setItem('count', products.length);
}

function findTotalSum(list) {
    let totalSum = 0;
    for(let item of list) {
        totalSum += item.price;
    }
    return totalSum;
}

function showProductInList(ul, image, title, price, size = '-') {
    let item = document.createElement('li');
    item.setAttribute('class', 'item');
    item.innerHTML = `
    <p class="remove_item">X</p>
    <div class="item_block">
        <img class="item_img" src="${image}" alt="">
        <div class="item_info">
            <p>${title}</p>
            <p>${price}₽</p>
            <p>${size}</p>
        </div>
    </div>`;
    ul.appendChild(item);
}

function getDataFromProduct(product) {
    let title = product.querySelector('.product_title').textContent;
    let image = product.querySelector('.product_image').src;
    let price = parseInt(product.querySelector('.product_price').textContent.match(/\d+/));
    return {image, title, price};
}