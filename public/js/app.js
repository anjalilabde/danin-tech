window.onload = () => {
//     var Scrollbar = window.Scrollbar;

// Scrollbar.initAll();

    const mobMenuOverlay = document.querySelector("#mob-menu-overlay");
    const mobMenuInner = document.querySelector("#mob-menu-inner");
    const menuToggleButton = document.querySelector("#hamburger-button");
    const mobNavLinks = document.querySelectorAll('#mob-menu-inner ul li');
    const desktopNavLinks = document.querySelectorAll('#desktop-menu li a');

    const showMenu = () => {
        menuToggleButton.classList.toggle('active');
        mobMenuInner.classList.toggle('!translate-x-0');
        mobMenuOverlay.classList.toggle("hidden");
        document.querySelector('body').classList.toggle('overflow-hidden');
    }
   
    menuToggleButton.onclick = () => {
        showMenu();
       
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