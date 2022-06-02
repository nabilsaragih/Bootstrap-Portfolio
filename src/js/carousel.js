$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    navText: [
        '<i class="fas fa-circle-chevron-left"></i>',
        '<i class="fas fa-circle-chevron-right"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})