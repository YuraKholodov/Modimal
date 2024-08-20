import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 16,

  breakpoints: {
    780: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
