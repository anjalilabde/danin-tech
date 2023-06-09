window.onload = () => {
//     var Scrollbar = window.Scrollbar;

// Scrollbar.initAll();

    const mobMenuOverlay = document.querySelector("#mob-menu-overlay");
    const mobMenuInner = document.querySelector("#mob-menu-inner");
    const menuToggleButton = document.querySelector("#hamburger-button");
    const mobNavLinks = document.querySelectorAll('#mob-menu-inner ul li');
    const desktopNavLinks = document.querySelectorAll('#desktop-menu li a');

    const toggleMenu = () => {
        menuToggleButton.classList.toggle('active');
        mobMenuInner.classList.toggle('!translate-x-0');
        mobMenuOverlay.classList.toggle("hidden");
        document.querySelector('body').classList.toggle('overflow-hidden');
    }
   
    menuToggleButton.onclick = () => {
        toggleMenu();
       
    };

    for (var i = 0; i < mobNavLinks.length; i++) {
        mobNavLinks[i].addEventListener("click", function() {
            toggleMenu();
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

    const  conferenceButton = document.querySelector('#conference-popup-button');
    const  conferenceOverlay = document.querySelector('#conference-popup-overlay');
    const  conferencePopup = document.querySelector('#conference-popup');
    const  conferencePopupClose = document.querySelector('#conference-popup-close');

    conferenceButton.onclick = () => {
        conferenceOverlay.classList.add('block');
        conferenceOverlay.classList.remove('hidden');
        conferencePopup.classList.add('block');
        conferencePopup.classList.remove('hidden');
        document.querySelector('body').classList.add('overflow-hidden');
       
    };
    conferencePopupClose.onclick = () => {
        conferenceOverlay.classList.remove('block');
        conferenceOverlay.classList.add('hidden');
        conferencePopup.classList.remove('block');
        conferencePopup.classList.add('hidden');
        document.querySelector('body').classList.remove('overflow-hidden');

       
    };

    window.addEventListener('scroll', function() {
      var targetDiv = document.querySelector('#contact-section h1');
      var targetRect = targetDiv.getBoundingClientRect() ;
    
      var distanceToTop = targetRect.top;
    
      if (distanceToTop <= window.innerHeight) {
        document.querySelector('#conference-popup-wrapper').classList.remove('opacity-100');
        document.querySelector('#conference-popup-wrapper').classList.add('opacity-0');
      }else{
        document.querySelector('#conference-popup-wrapper').classList.add('opacity-100');
        document.querySelector('#conference-popup-wrapper').classList.remove('opacity-0');
      }
    });
    
  }