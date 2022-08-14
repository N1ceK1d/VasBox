const products = document.querySelector('#products');
const addButton = document.querySelector('#addButton');
const addingForm = document.querySelector('#window_block');
const popupAdder = document.querySelector('.adder');
const closeWindowButton = document.querySelector('#closeWindow');
const boxParam = document.querySelector('#adding_form > #box_param');

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
        //let boxPrice = event.target.parentNode.children[2].children[1].textContent;
        let boxPrice;
        let boxSize;
        let tshirtSize;

        switch(boxTitle) {
            case 'Стиль':
            case 'Для милых дам':
            case 'Дети 90-х': 
                addTShirt();
            break;
        };

        addingForm.addEventListener('click', event2 => {
            if(document.querySelector('input[name="shirt"]:checked')){
                tshirtSize = document.querySelector('input[name="shirt"]:checked').value;
            } else {
                tshirtSize = '-';
            }
            if (event2.target.className == 'addingButton') {
                console.log(document.querySelector('input[name="shirt"]:checked'));
                if(document.querySelector('input[name="size_box"]:checked')) {
                    if(document.querySelector('input[name="size_box"]:checked').value == 'маленький') {
                        boxPrice = '1999';
                    } else if(document.querySelector('input[name="size_box"]:checked').value == 'большой') {
                        boxPrice = '3999';
                    }
                    boxSize = document.querySelector('input[name="size_box"]:checked').value;
                    productsList.push(addProduct(boxImage, boxTitle, parseInt(boxPrice.match(/\d+/)), boxSize, tshirtSize));
                    localStorage.setItem('productsCount', productsList.length);
                    localStorage.setItem('jsonData', JSON.stringify(productsList));
                    console.log(tshirtSize);
                }
            } else {
                return;
            }
        })
     } else {
        return;
     }
});

function addTShirt() {
    let item = document.createElement('div');
    item.setAttribute('id', 'tShirtSize');
    item.innerHTML = `
        <label for="">S</label>
        <input id="s_size" class="tShirt_size" value="S" type="radio" name="shirt">
        <label for="">M</label>
        <input id="m_size" class="tShirt_size" value="M" type="radio" name="shirt">
        <label for="">L</label>
        <input id="l_size" class="tShirt_size" value="L" type="radio" name="shirt">`
    boxParam.appendChild(item);
}

if(localStorage.getItem('productsCount') > 0) {
    let one_icons = document.querySelectorAll('.one_icon');
    for (icon of one_icons) {
        icon.style.display = 'block';
    }
    let shoppingBagCounter = document.querySelector('#shopping_bag_block');
    shoppingBagCounter.textContent = localStorage.getItem('productsCount');
    console.log(localStorage.getItem('productsCount') + "  " + productsList.length);
}

function addProduct(image, title, price, size, tshirt) {
    return new Product(image, title, price, size, tshirt);
}

function getPrices(prices) { //получаем массив цен
    let pricesList = [];
    for (price of prices) {
        pricesList.push(parseInt(price.price));
    } 
    return pricesList;
}