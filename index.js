
// swiper function
var swiper = new Swiper(".home-slider", {
    effect:"overflow",
    grabCursor:true,
    centeredSlides:true,
    slidePreview:"auto",
    overflowEffect:{
        rotate:0,
        stretch:0,
        depth:100,
        modifier:2,
        slideShadows:true
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween:10,
    effect:"overflow",
    grabCursor:true,
    // centeredSlides:true,
    slidePreview:1,
    breakpoints:{
      0:{
        slidePreview:1,
      },
      700:{
        slidePreview:2,
      },
      1050:{
        slidePreview:3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
  });
var menuBtn=document.querySelector("menu-bar");
var navBar=document.querySelector(".navbar");
menuBtn.onclick=()=>{
  menuBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
}



