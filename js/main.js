/*=============== SHOW MENU ===============*/
const   show = document.getElementById('nav-toggle'),
        close = document.getElementById('nav-close'),
        menu = document.querySelector('.nav__menu'),
        menu_items = document.querySelectorAll('.nav__item')

show.addEventListener("click", ()=> {
    menu.classList.add('show-menu')
})

close.addEventListener("click", ()=> {
    menu.classList.remove('show-menu')
})

menu_items.forEach(link => {
    link.addEventListener("click", ()=> {
        menu.classList.remove('show-menu')
    }
    )
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById('header')
function scrollHeader() {
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    }
    else{
        header.classList.remove('scroll-header');
    } 
}
window.addEventListener("scroll" , scrollHeader)
/*=============== POPULAR SWIPER ===============*/


/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
