productsGrid.addEventListener('click', event => {
    if(event.target.className == 'description_icon') {
        box_description_block.style.display = 'block';
        document.body.style.overflow = 'hidden';
        switch(event.target.parentNode.children[2].children[0].textContent) {
            case 'Стиль':
                document.querySelector('#desc_text').innerHTML = getStyleText();
            break;
            case 'Характер':
                document.querySelector('#desc_text').innerHTML = getCharacterText();
            break;
            case 'Для милых дам':
                document.querySelector('#desc_text').innerHTML = getLadiesText();
            break;
            case 'Дети 90-х':
                document.querySelector('#desc_text').innerHTML = getChildren90sText();
            break;
            case 'Уютный дом':
                document.querySelector('#desc_text').innerHTML = getHomeText();
            break;
            case 'Турист':
                document.querySelector('#desc_text').innerHTML = getTouristText();
            break;
            default:
                document.querySelector('#desc_text').innerHTML = 'Описание';
            break;
        };
        
    } 
});

document.querySelector('#close_desc').addEventListener('click', ()=> {
    box_description_block.style.display = 'none';
    document.body.style.overflow = 'auto';
});

function getStyleText() {
    return `<h3>Стиль</h3>
    <p>
        В этом боксе мы собрали всё самое крутое что можно подарить
        человеку, который следит за тем как он выглядит
    </p>`;
}

function getLadiesText() {
    return `<h3>Для милых дам</h3>
    <p>
        Бокс для настоящих принцесс, всё необходимое для поддержания
        красоты и конечно же сладости
    </p>`;
}

function getChildren90sText() {
    return `<h3>Дети 90-х</h3>
    <p>
        Окунись во времена 90-х, почувствуй вкус настоящего веселья
    </p>`;
}

function getCharacterText() {
    return `<h3>Характер</h3>
    <p>
        Для брутальности мужчины собрали всё самое необходимое
    </p>`;
}

function getHomeText() {
    return `<h3>Уютный дом</h3>
    <p>
        Создай потрясающую атмосферу, для восполнения энергии
    </p>`;
}

function getTouristText() {
    return `<h3>Турист</h3>
    <p>
        Путешествия станут более приятными с данным подарком
    </p>`;
}