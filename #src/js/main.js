const swiper = new Swiper(".clubs__slider", {
  slidesPerView: 5,
  spaceBetween: 39,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});

const discountsSlider = new Swiper(".discounts__slider", {
  slidesPerView: 2,
  spaceBetween: 60,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
