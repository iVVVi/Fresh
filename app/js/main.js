$(function(){

    $('.slider').slick({
        dots: false,
        arrows: true,
        nextArrow: '<button class="slick-next slick-arrow"><svg class="next"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
        prevArrow: '<button class="slick-prev slick-arrow"><svg class="prev"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
        infinite: false,
        speed: 300,
        slidesToShow: 1
    });

    var mixer = mixitup('.products__cards');
});