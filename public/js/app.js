window.onload = () => {
    const mobMenuOverlay = document.querySelector("#mob-menu-overlay");
    const mobMenuInner = document.querySelector("#mob-menu-inner");
    const menuToggleButton = document.querySelector("#hamburger-button");
    const menuCloseButton = document.querySelector("#menu-closer");
    const mobNavLinks = document.querySelectorAll('#mob-menu-inner ul li');

    const showMenu = () => {
        mobMenuInner.classList.add('translate-x-0');
        mobMenuInner.classList.remove("ltr:-translate-x-full", "rtl:translate-x-full");
        mobMenuOverlay.classList.remove("hidden");
    }
    const hideMenu = () => {
        mobMenuInner.classList.remove('translate-x-0');
        mobMenuInner.classList.add("ltr:-translate-x-full", "rtl:translate-x-full");
        mobMenuOverlay.classList.add("hidden");
    }

    menuToggleButton.onclick = () => {
        showMenu();
    };
    menuCloseButton.onclick = () => {
        hideMenu();
    };

    for (const mobNavLink of mobNavLinks) {
        mobNavLink.onclick = () =>{
            hideMenu();
        }
      }
  
  }