$(document).ready(function () {

    $(".hamburger").on("click", function () {
        $(this).toggleClass("is-active");
        $("ul.menuOnSm").toggleClass("open");
    });

//     $(window).on("scroll", function () {
//         if ($(window).scrollTop() + $(window).height() - $("#digits").offset().top > 100) {
//             runDigit();
//         }
//         if(($(window).scrollTop()) > 70) {
//             $(".fixMenuTop").addClass("fixed");
//         } else {
//             $(".fixMenuTop").removeClass("fixed");
//         }
//     });

// timer();
// new WOW().init();

    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: false,
        items: 1,
        navText: ['<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>'],
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() + $(window).height() - $("#digits").offset().top > 100) {
            runDigit();
        }
        if(($(window).scrollTop()) > 70) {
            $(".fixMenuTop").addClass("fixed");
        } else {
            $(".fixMenuTop").removeClass("fixed");
        }
    });

// });

function runDigit() {
    $(".digit.notAnim").each(function (i, elem) {
        let start = 0;
        let end = $(elem).data("digit");
        let timer = setInterval(function () {
            $(elem).text(start);
            start = start + 5;
            if (start >= end) {
                clearInterval(timer);
                $(elem).removeClass("notAnim");
            }
        }, 20);
    });
};

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: '.slider-nav'
  });
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true
});

// function timer(){
//     timeend = new Date(2020, 7, 17);
//     // IE и FF по разному отрабатывают getYear()
//     timeend = new Date(timeend.getYear() > 1900 ? (timeend.getYear() + 1) : (timeend.getYear() + 1901), 0, 1);
//     // для задания обратного отсчета до определенной даты укажите дату в формате:
//     // timeend = new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
//     // Для задания даты с точностью до времени укажите дату в формате:
//     // timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
//         today = new Date();
//         today = Math.floor((timeend - today) / 1000);
//         tsec = today % 60; today = Math.floor(today / 60); if (tsec < 10) tsec = '0' + tsec;
//         tmin = today % 60; today = Math.floor(today / 60); if (tmin < 10) tmin = '0' + tmin;
//         thour = today % 24; today = Math.floor(today / 24);
//         // timestr = today + " " + thour + " " + tmin + " " + tsec + " ";
//         // document.getElementById('t').innerHTML = timestr;
//         $("#day").html(today);
//         $("#hour").html(thour);
//         $("#minute").html(tmin);
//         $("#second").html(tsec);
//         window.setTimeout("timer()", 1000);
// }

})