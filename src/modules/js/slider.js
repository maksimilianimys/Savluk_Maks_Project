$(document).ready(function () {
    $(".single-item").slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        pauseOnFocus: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
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
});