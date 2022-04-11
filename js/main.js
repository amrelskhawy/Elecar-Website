/*=============== SHOW MENU ===============*/
const show = document.getElementById("nav-toggle"),
    close = document.getElementById("nav-close"),
    menu = document.querySelector(".nav__menu"),
    menu_items = document.querySelectorAll(".nav__item");

show.addEventListener("click", () => {
    menu.classList.add("show-menu");
});

close.addEventListener("click", () => {
    menu.classList.remove("show-menu");
});

menu_items.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("show-menu");
    });
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById("header");
function scrollHeader() {
    if (this.scrollY >= 50) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", scrollHeader);

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixer = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 200,
    }
});

/* Link active featured */
let LinkFeatured = document.querySelectorAll('.featured__item')

LinkFeatured.forEach(item => {
    item.addEventListener('click' , () => {
        LinkFeatured.forEach(ele => {
            ele.classList.remove('active')
        })
        item.classList.add('active')
    })
})

/*=============== SHOW SCROLL UP ===============*/
let scrollUp = document.getElementById('scrollup')
window.addEventListener('scroll', ()=> {
    if (window.scrollY >= 350 ) {
        scrollUp.style.bottom = "3rem";
    } else {
        scrollUp.style.bottom = "-30%";
    }
}) 

scrollUp.addEventListener('click', (e)=> {
    e.preventDefault()
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
