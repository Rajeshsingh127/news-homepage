
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');
const navWrapper = document.querySelector('.nav-wrapper');
const navigation = document.querySelector('nav');
const navItem = document.querySelectorAll('nav ul li');



function showNav(){
    navigation.classList.add('open');
    navWrapper.classList.add('wrapper-open');
    
}

function removeNav(){
    navigation.classList.remove('open');
    navWrapper.classList.remove('wrapper-open');    
}

window.addEventListener('DOMContentLoaded',() =>{
    menu.addEventListener('click' , () => {
        showNav();
    })

    navWrapper.addEventListener('click' , (e) => {
        e.preventDefault();
        if(e.target.classList.contains('nav-wrapper')){
        removeNav();
        }
    })

    navItem.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e.target);
            removeNav();
        })
    })

    closeMenu.addEventListener('click', () => {
        removeNav();
    })
})