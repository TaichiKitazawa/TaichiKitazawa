// slow page link
smoothScroll.init();
// slow page link

//modal


//modal

//pege-top

$(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


//pege-top

//scroll-trigger

document.addEventListener('DOMContentLoaded', function () {
    ScrollTrigger.init();
});

//scroll-trigger

