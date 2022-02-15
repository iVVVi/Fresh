$(function(){

    $('.header__dropdown-btn').on('click', function () {
        $('.header__options, .header__dropdown-btn').toggleClass('active');
    });



    let btn = $('.header__dropdown-btn');
    let options = $('.header__options, .header__dropdown-btn');

    $(document).on('mouseup',function (e) { 
    if ( !btn.is(e.target) && btn.has(e.target).length === 0 &&
       
        !options.is(e.target) && options.has(e.target).length === 0
    
        ) {
    options.removeClass('active');
    }
});


    $('.slider__list').slick({
        dots: false,
        arrows: true,
        nextArrow: '<button class="slick-next slick-arrow"><svg class="next"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
        prevArrow: '<button class="slick-prev slick-arrow"><svg class="prev"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
        infinite: false,
        speed: 300,
        slidesToShow: 1
    });


    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');
   
    var config = {
      controls: {
        scope: 'local'
      }
    };
   
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
});