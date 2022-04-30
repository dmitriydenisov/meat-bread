if (document.querySelector(".clubs__slider")) {
  const swiper = new Swiper(".clubs__slider", {
    slidesPerView: 4,
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
      delay: 1500,
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

//табы на странице ресторана
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

//изменение количесвткатовара в карточке
const counters1 = document.querySelectorAll("[data-counter]");
for (const count of counters1) {
  const catrMinusBtns = count.querySelector(".cart-minus");
  const catrPlusBtns = count.querySelector(".cart-plus");
  const counts = count.querySelector(".count");

  let countontent = parseInt(count.textContent);

  function plus(event) {
    event.preventDefault();
    ++countontent;
    counts.textContent = countontent;
  }

  function minus(event) {
    event.preventDefault();
    if (countontent > 1) {
      --countontent;
      counts.textContent = countontent;
    }
  }
  catrMinusBtns.addEventListener("click", minus);
  catrPlusBtns.addEventListener("click", plus);
}

const counters = document.querySelectorAll("[data-counter]");

//меню на странице доставки
const menu = document.querySelector(".btn-block__item-more");

if (menu) {
  // menu.addEventListener("click", function () {
  //   this.classList.add("btn-block__item-more--active");
  // });
  !menu.addEventListener("click", function () {
    this.classList.toggle("btn-block__item-more--active");
  });
}

//модальное окно на странице доставки
const carts = document.querySelectorAll(".cart__img");
const modal = document.querySelector(".delivery-popup");

for (const cart of carts) {
  cart.addEventListener("click", () => {
    modal.classList.add("modal-active");
  });
}
const closeModal = document.querySelector(".delivery-popup__close");
if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.classList.remove("modal-active");
  });
}

//модальное окно в корзине
if (document.querySelector(".basket-products__btn")) {
  const basketBtnn = document
    .querySelector(".basket-products__btn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      modal.classList.add("modal-active");
    });
}
