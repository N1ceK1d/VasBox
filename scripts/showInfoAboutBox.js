const windowInfoBlock = document.querySelector('#windowInfo_block');
const infoBlock = document.querySelector('.info_block');
const closeInfoButton = document.querySelector('.closeInfoWindow');

products.addEventListener('click', (event) => {
    if(event.target.className === 'info_box') {
        windowInfoBlock.classList.add('open');
        infoBlock.classList.add('info_open');
    } else {
        return;
    }
});

closeInfoButton.addEventListener('click', () => {
    windowInfoBlock.classList.remove('open');
    infoBlock.classList.remove('info_open');
});

