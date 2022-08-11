class ListOfProducts {
    listOfProducts = [];
    count;
    totalPrice;
    jsonData;

    getCount() {
        return this.count;
    }

    setCount(count) {
        this.count = count;
    }

    getTotalPrice(listOfProducts) {
        let sum = 0;
        for(let price of listOfProducts) {
            sum += price.price;
        }
        return sum;
    }

    setTotalPrice(totalPrice) {
        this.totalPrice = totalPrice;
    }

    addProduct(img, title, price, type, size, productListBlock) {
        this.listOfProducts.push(new Product(img, title, price, type, size));
        let item = document.createElement('li');
        item.innerHTML = `
        <li class="prodItem">
            <div class="itemData">
                <img class="productImgInList" src="${img}"/>
                <div class="decription">
                    <p class="desc_text" id="title">${title}</p>
                    <p class="desc_text" id="price">${price}₽</p>
                    <p class="desc_text" id="type">${type}</p>
                    <p class="desc_text" id="size">${size}</p>
                </div>
            <div>
            <div class="deleteElement"></div>
        </li>`;
        productListBlock.appendChild(item);
        return this.listOfProducts;
    }

    removeProduct(productListBlock) {

    }

    showList() {

    }

    updateProductsInShoppingBag(count) {
        if(localStorage.getItem('count') > 0) {
            let one_icons = document.querySelectorAll('.one_icon');
            for (icon of one_icons) {
                icon.style.display = 'block';
            }
            let shoppingBagCounter = document.querySelector('#shopping_bag_block');
            shoppingBagCounter.innerHTML = localStorage.getItem('count');
        }
    }

    saveToLocalStorage(jsonData, count) {
        localStorage.setItem('jsonList', jsonData);
        localStorage.setItem('count', count);
    }

    goListToJSON(list) {
        this.jsonData = JSON.stringify(list);
        return this.jsonData;
    }

    goToListFromJSON(jsonData) {
        return JSON.parse(jsonData);
    }

    showTotalPrice(resultSumElem) {
        resultSumElem.textContent = this.totalPrice;
    }
}