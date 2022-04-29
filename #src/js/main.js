if (document.querySelector(".clubs__slider")) {
  const swiper = new Swiper(".clubs__slider", {
    slidesPerView: 5,
    spaceBetween: 39,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
}

if (document.querySelector(".discounts__slider")) {
  const discountsSlider = new Swiper(".discounts__slider", {
    slidesPerView: 2,
    spaceBetween: 60,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

if (document.querySelector(".restaurant__slider")) {
  const restaurantSlider = new Swiper(".restaurant__slider", {
    slidesPerView: 3,
    spaceBetween: 22,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
}

const tabItems = Array.from(document.querySelectorAll(".restaurant-menu__btn"));
const contentItem = Array.from(
  document.querySelectorAll(".tabs-content__item")
);

const clearActiveClass = (element, className = "active") => {
  element.find((item) => item.classList.remove(`${className}`));
};

const setActiveClass = (element, index, className = "active") => {
  element[index].classList.add(`${className}`);
};

const checkoutTabs = (item, index) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) return;

    clearActiveClass(tabItems);
    clearActiveClass(contentItem);

    setActiveClass(tabItems, index);
    setActiveClass(contentItem, index);
  });
};

tabItems.forEach(checkoutTabs);

// for (const tab of tabItems) {
//   checkoutTabs();
// }

const menu = document.querySelector(".btn-block__item-more");

if (menu) {
  menu.addEventListener("click", function () {
    this.classList.toggle("btn-block__item-more--active");
  });
}
