$(function () {

    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop();
        scrollTop > 0 ? $('.header').addClass('fixed') : $('.header').removeClass('fixed');
    });

    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop();
        $('.scroll_event').each(function () {
            if (scrollTop + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('scrolled');
            } //else {
            //$(this).removeClass('scrolled');
            //}
        });
    });

    const mainSlide = new Swiper('.main_slide', {
        effect: 'fade',
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 6000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const scheduleSlide = new Swiper('.schedule_slide', {
        loop: true,
        slidesPerView: 3,
        autoplay: {
            delay: 4000,
        },
    });

    $('.notice .news_list>li').on('click', function () {
        let idx = $(this).index();
        $('.notice .news_list>li').eq(idx).addClass('active').siblings().removeClass('active');
        $('.notice .news_cont>li').eq(idx).addClass('active').siblings().removeClass('active');
    });

});