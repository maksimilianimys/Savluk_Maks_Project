$(document).ready(function () {
    $(".single-item").slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        pauseOnFocus: true,
        dots: false,
        fade: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    swipe: true,
                    touchMove: true,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    dots: true,
                    swipe: true,
                    touchMove: true,
                },
            },
        ],
    });

    $(".slider-prev").on("click", function () {
        $(".single-item").slick("slickPrev");
    });

    $(".slider-next").on("click", function () {
        $(".single-item").slick("slickNext");
    });

    $(".single-item .slide").on("click", function () {
        if ($(window).width() <= 1024) {
            $(".single-item").slick("slickNext");
        }
    });
});