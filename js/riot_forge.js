$(document).ready(function () {

    const mv = new Swiper('.mv', {

        loop: true,
        speed: 1000,
        /* autoplay: {
            delay: 5000,
            disableOnInteraction: false, 
    },*/
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });


});