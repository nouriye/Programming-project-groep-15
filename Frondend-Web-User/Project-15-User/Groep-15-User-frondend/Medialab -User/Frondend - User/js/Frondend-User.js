document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');
  const shoppingCart = document.querySelector('.shopping-cart');
  const loginForm = document.querySelector('.login-form');
  const navbar = document.querySelector('.navbar');

  document.querySelector('#search-btn').onclick = () => {
    toggleActive(searchForm);
  };

  document.querySelector('#cart-btn').onclick = () => {
    toggleActive(shoppingCart);
  };

  document.querySelector('#login-btn').onclick = () => {
    toggleActive(loginForm);
  };

  document.querySelector('#menu-btn').onclick = () => {
    toggleActive(navbar);
  };

  function toggleActive(element) {
    element.classList.toggle('active');
    removeOthersActive(element);
  }

  function removeOthersActive(activeElement) {
    const elements = [searchForm, shoppingCart, loginForm, navbar];
    elements.forEach(element => {
      if (element !== activeElement) {
        element.classList.remove('active');
      }
    });
  }

  const reviewSwiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
});