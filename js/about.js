$(document).ready(function () {

  const hi = new Swiper('.hi', {
    loop: true,
    direction: 'vertical',
    effect: 'coverflow',
    slidesPerView: 3,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,
    clickable: false,
  });

  const story = new Swiper('.story', {
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,
    clickable: false,
  });





});