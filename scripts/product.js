const productsGrid = document.querySelector('#products');
const selectType = document.querySelector('#box_type_block');
const boxTypeBlock = document.querySelector('#box_type');
const addButton = document.querySelector('#add_to_cart');

let products = [];

let image; 
let title; 
let price; 
let type;
let size;

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
}

productsGrid.addEventListener('click', (event) => {
    if(event.target.className == 'adding_button') {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        selectType.style.display = 'block';
        
        switch(event.target.parentNode.querySelector('.product_title').textContent) {
            case 'Характер':
            case 'Уютный дом':
            case 'Турист':
                document.querySelector('#sizes').style.display = 'none';
                size = '-'
                break;
            default:
                document.querySelector('#sizes').style.display = 'block';
            break;
        };

        image = event.target.parentNode.children[1].src;
        title = event.target.parentNode.children[2].children[0].textContent;
    }
});

boxTypeBlock.addEventListener('click', (event) => {
    if(event.target.id == 'add_to_cart') {
        if (document.querySelector('input[name="type"]:checked').checked == true) {
            type = document.querySelector('input[name="type"]:checked').value;
        }

        if(type == 'обычный') {
            price = 1999;
        } else {
            price = 3999;
        }
        
        if (document.querySelector('input[name="size"]:checked')) {
            size = document.querySelector('input[name="size"]:checked').value;
        } else {
            size = '-';
        }

        document.body.style.overflow = 'auto';
        selectType.style.display = 'none';

        products.push(new Product(image, title, price, type, size));
        console.log(products);
        document.querySelector('input[name="type"]:checked').checked = false;
        try
        {
            document.querySelector('input[name="size"]:checked').checked = false;
        } catch (err) {
            
        }
        showCartBtn.style.display = 'block';
        document.querySelector('#product_counter').textContent = products.length;
        localStorage.setItem('products', JSON.stringify(products));
        localStorage.setItem('count', products.length);
    } else if (event.target.id == 'close_id') {
        document.body.style.overflow = 'auto';
        selectType.style.display = 'none';
    }
});