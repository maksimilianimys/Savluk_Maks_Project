$(document).ready((function(){$(".single-item").slick({infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2500,pauseOnHover:!0,pauseOnFocus:!0,dots:!1,responsive:[{breakpoint:1024,settings:{dots:!0}}]}),$(".slider-prev").on("click",(function(){$(".single-item").slick("slickPrev")})),$(".slider-next").on("click",(function(){$(".single-item").slick("slickNext")}))}));