var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = function (){
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "./img/close.png";
        
    } 
    else {
        sideNav.style.right = "-250px";
        menu.src = "./img/menu.png";
    }
};

    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        loop: true,
    });
