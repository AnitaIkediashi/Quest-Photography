const text = document.querySelector("h1");
const listItems = document.querySelectorAll("ul li a")


// hamburger working js
const menuBtn = document.querySelector("#menu-btn");
const navBar = document.querySelector(".navbar");

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
});

//header working js and content opacity
window.addEventListener('scroll', ()=> {
    let header = document.querySelector(".header");
    if(window.scrollY > 0) {
        header.style.backgroundColor ='#ebebeb';
        text.style.color = '#a27b5c';
        listItems.forEach(item => {
            item.style.color = '#a27b5c';
        });
        menuBtn.style.color = '#a27b5c';
    } else {
        header.style.backgroundColor ='transparent';
        text.style.color = '#ebebeb';
        listItems.forEach(item => {
            item.style.color = '#ebebeb';
        });
        menuBtn.style.color = '#ebebeb'
    }

    let textScroll = window.pageYOffset;
    if(textScroll <= 300) {
        opacity = 1 - textScroll / 300
    } else {
        opacity = 0
    };
    document.querySelector(".content").style.opacity = opacity;
})

// modal working js    
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const modal = document.querySelector(".modal");

openBtn.addEventListener('click', () => {
    modal.showModal();
});

closeBtn.addEventListener('click', () => {
    modal.close();
});

//swiper working js
var swiper = new Swiper(".price-slider", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
    }
});

var swiper = new Swiper(".review-slide", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
    }
});


