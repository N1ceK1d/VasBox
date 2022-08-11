const products = document.querySelector('#products');
const addButton = document.querySelector('#addButton');
const addingForm = document.querySelector('#window_block');
const popupAdder = document.querySelector('.adder');
const closeWindowButton = document.querySelector('#closeWindow');

let productsList = [];
if (localStorage.getItem('productsCount') > 0) {
    productsList = JSON.parse(localStorage.getItem('jsonData'));
}

products.addEventListener('click', event => {
    if (event.target.className == 'add_to_cart') {

        closeWindowButton.addEventListener('click', () => {
            addingForm.classList.remove('open');
            popupAdder.classList.remove('adder_open');
        });

        addingForm.classList.add('open');
        popupAdder.classList.add('adder_open');
        
        let boxImage = event.target.parentNode.children[1].src;
        let boxTitle = event.target.parentNode.children[2].children[0].textContent;
        let boxPrice = event.target.parentNode.children[2].children[1].textContent
        
        let boxType;
        let boxSize;

        addingForm.addEventListener('click', event2 => {
            if (event2.target.className == 'addingButton') {
                if(document.querySelector('input[name="type_box"]:checked') && document.querySelector('input[name="size_box"]:checked')) {
                    boxType = document.querySelector('input[name="type_box"]:checked').value;
                    boxSize = document.querySelector('input[name="size_box"]:checked').value;

                    productsList.push(addProduct(boxImage, boxTitle, parseInt(boxPrice.match(/\d+/)), boxType, boxSize));
                    localStorage.setItem('productsCount', productsList.length);
                    localStorage.setItem('jsonData', JSON.stringify(productsList));
                }
            } else {
                return;
            }
        })
     } else {
        return;
     }
});

if(localStorage.getItem('productsCount') > 0) {
    let one_icons = document.querySelectorAll('.one_icon');
    for (icon of one_icons) {
        icon.style.display = 'block';
    }
    let shoppingBagCounter = document.querySelector('#shopping_bag_block');
    shoppingBagCounter.textContent = localStorage.getItem('productsCount');
    console.log(localStorage.getItem('productsCount') + "  " + productsList.length);
}

function addProduct(image, title, price, type, size) {
    console.log('adding complete!');
    return new Product(image, title, price, type, size);
    
}

function getPrices(prices) { //получаем массив цен
    let pricesList = [];
    for (price of prices) {
        pricesList.push(parseInt(price.price));
    } 
    return pricesList;
}