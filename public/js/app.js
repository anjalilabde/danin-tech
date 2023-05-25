window.onload = () => {
    const mobMenuOverlay = document.querySelector("#mob-menu-overlay");
    const mobMenuInner = document.querySelector("#mob-menu-inner");
    const menuToggleButton = document.querySelector("#hamburger-button");
    const menuCloseButton = document.querySelector("#menu-closer");

    menuToggleButton.onclick = () => {
      mobMenuInner.classList.add('translate-x-0');
      mobMenuInner.classList.remove("ltr:-translate-x-full", "rtl:translate-x-full");
      mobMenuOverlay.classList.remove("hidden");
    };
    menuCloseButton.onclick = () => {
      mobMenuInner.classList.remove('translate-x-0');
      mobMenuInner.classList.add("ltr:-translate-x-full", "rtl:translate-x-full");
      mobMenuOverlay.classList.add("hidden");

    };
  }