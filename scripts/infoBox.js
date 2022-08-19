productsGrid.addEventListener('click', event => {
    if(event.target.className == 'description_icon') {
        box_description_block.style.display = 'block';
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        document.querySelector('#desc_text').innerHTML = 'Описание';
    } 
});

document.querySelector('#close_desc').addEventListener('click', ()=> {
    box_description_block.style.display = 'none';
    document.body.style.overflow = 'auto';
})

