const showCartBtn = document.querySelector('#shopping_cart_icon');
const shoppingCart = document.querySelector('#shopping_cart_block');
const close = document.querySelector('.close');
const productList = document.querySelector('#product_list');
const clearList = document.querySelector('#clearList');
const resultSum = document.querySelector('#totalSum');

if(localStorage.getItem('count') > 0) {
    products = JSON.parse(localStorage.getItem('products'));
    console.log(products);
    for(let item of products) {
        showProductInList(item.image, item.title, item.price, item.type, item.size);
        document.querySelector('#product_counter').textContent = products.length;
        if(products.length == 0) {
            showCartBtn.style.display = 'none';
        }
    }
    
}

if(products.length > 0 || localStorage.getItem('count') > 0) {
    showCartBtn.style.display = 'block';
    document.querySelector('#product_counter').textContent = parseInt(localStorage.getItem('count'));
} else {
    showCartBtn.style.display = 'none';
}

showCartBtn.addEventListener('click', () => {
    shoppingCart.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    totalSum.textContent = `Итог: ${getTotalSum(products)}₽`;
});

close.addEventListener('click', () => {
    shoppingCart.style.display = 'none';
    document.body.style.overflow = 'auto';
})

productList.addEventListener('click', (event) => {
    if(event.target.className == 'remove_item') {
        let index = 0;
        event.target.parentNode.style.display = 'none';
        let list = document.querySelectorAll('.item');
        for(let item of list) {
            if(item.style.display == 'none') {
                products.splice(index, 1);
                totalSum.textContent = `Итог: ${getTotalSum(products)}₽`;
                document.querySelector('#product_counter').textContent = products.length;
            }
            index++;
        }
        console.log(products);
    }
    if(products.length == 0) {
        showCartBtn.style.display = 'none';
    }
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('count', products.length);
});

function showProductInList(image, title, price, type, size = '-') {
    let item = document.createElement('li');
    item.setAttribute('class', 'item');
    item.innerHTML = `
    <p class="remove_item">X</p>
    <div class="item_block">
        <img class="item_img" src="${image}" alt="">
        <div class="item_info">
            <p>${title}</p>
            <p>${price}₽</p>
            <p>${type}</p>
            <p>${size}</p>
        </div>
    </div>`;
    productList.appendChild(item);
};

clearList.addEventListener('click', () => {
    totalSum.textContent = `Итог: 0₽`;
    document.querySelector('#product_counter').textContent = 0;
    productList.innerHTML = '';
    products = [];
    showCartBtn.style.display = 'none';
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('count', products.length);
});

function getTotalSum(list) {
    let totalSum = 0;
    for (let item of list) {
        totalSum += item.price;
    }
    return totalSum;
}