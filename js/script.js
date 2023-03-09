let darkmode = document.querySelector(".darkmode");
let html = document.querySelector("html");
let light_icon = document.querySelector(".light_icon");
let dark_icon = document.querySelector(".dark_icon");
dark_icon.getElementsByClassName.display = "none"

let number = 0;

function handleDarkMode(){
    html.classList.toggle("dark");


    if (number === 0){
        light_icon.getElementsByClassName.display="none"
        dark_icon.getElementsByClassName.display="block"
        number = 1
    }
    else
    light_icon.getElementsByClassName.display="block"
    dark_icon.getElementsByClassName.display="none"
    number = 0
}


darkmode.addEventListener("click", handleDarkMode)


$(function(){
    'use strict'
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    //   Year
    let fullYear =new Date().getFullYear();
    
    document.querySelector(".year").innerHTML = fullYear
})