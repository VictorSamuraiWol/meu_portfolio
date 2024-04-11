const menuListItem = document.querySelectorAll('.menu__list__item a');

console.log(menuListItem);
console.log(menuListItem[0]);
console.log(menuListItem[1]);
console.log(menuListItem[2]);
console.log("teste interação");


menuListItem[0].addEventListener('mouseover', ()=> {
    menuListItem[0].classList.add('addColor');
    menuListItem[0].classList.remove('removeColor');
    menuListItem[0].style.transformScale = '3';
});

menuListItem[0].addEventListener('mouseout', ()=> {
    menuListItem[0].classList.add('removeColor');
    menuListItem[0].classList.remove('addColor');
});

menuListItem[1].addEventListener('mouseover', ()=> {
    menuListItem[1].classList.add('addColor');
    menuListItem[1].classList.remove('removeColor');
});

menuListItem[1].addEventListener('mouseout', ()=> {
    menuListItem[1].classList.add('removeColor');
    menuListItem[1].classList.remove('addColor');
});

menuListItem[2].addEventListener('mouseover', ()=> {
    menuListItem[2].classList.add('addColor');
    menuListItem[2].classList.remove('removeColor');
});

menuListItem[2].addEventListener('mouseout', ()=> {
    menuListItem[2].classList.add('removeColor');
    menuListItem[2].classList.remove('addColor');
});

menuListItem[3].addEventListener('mouseover', ()=> {
    menuListItem[3].classList.add('addColor');
    menuListItem[3].classList.remove('removeColor');
});

menuListItem[3].addEventListener('mouseout', ()=> {
    menuListItem[3].classList.add('removeColor');
    menuListItem[3].classList.remove('addColor');
});

menuListItem[4].addEventListener('mouseover', ()=> {
    menuListItem[4].classList.add('addColor');
    menuListItem[4].classList.remove('removeColor');
});

menuListItem[4].addEventListener('mouseout', ()=> {
    menuListItem[4].classList.add('removeColor');
    menuListItem[4].classList.remove('addColor');
});

menuListItem[5].addEventListener('mouseover', ()=> {
    menuListItem[5].classList.add('addColor');
    menuListItem[5].classList.remove('removeColor');
});

menuListItem[5].addEventListener('mouseout', ()=> {
    menuListItem[5].classList.add('removeColor');
    menuListItem[5].classList.remove('addColor');
});






