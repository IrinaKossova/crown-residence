const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const burgerIcon = "/images/menu-open.svg";
const crossIcon = "/images/menu-close.svg";

function initBurger() {
    if (!burger) return; 

    burger.addEventListener('click', () => {
        const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
        burger.setAttribute('aria-expanded', !expanded);
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        burger.style.backgroundImage = expanded ? `url("${burgerIcon}")` : `url("${crossIcon}")`;
    });
}

initBurger();