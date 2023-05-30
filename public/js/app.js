window.onload = () => {
    const mobMenuOverlay = document.querySelector("#mob-menu-overlay");
    const mobMenuInner = document.querySelector("#mob-menu-inner");
    const menuToggleButton = document.querySelector("#hamburger-button");
    const menuCloseButton = document.querySelector("#menu-closer");
    const mobNavLinks = document.querySelectorAll('#mob-menu-inner ul li');
    const desktopNavLinks = document.querySelectorAll('#desktop-menu li a');

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


    for (var i = 0; i < mobNavLinks.length; i++) {
        mobNavLinks[i].addEventListener("click", function() {
            hideMenu();
          (document.querySelector('.menuActive')) ? document.querySelector('.menuActive').classList.remove('menuActive') : '';
          this.classList.add('menuActive');
        });
      } 

    for (var i = 0; i < desktopNavLinks.length; i++) {
        desktopNavLinks[i].addEventListener("click", function() {
          (document.querySelector('.menuActive')) ? document.querySelector('.menuActive').classList.remove('menuActive') : '';
          this.classList.add('menuActive');
        });
      } 
  
  }