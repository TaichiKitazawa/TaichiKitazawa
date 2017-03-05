// slow page link
smoothScroll.init();
// slow page link

//modal

//hamburger-menu

(function ($) {
    $(function () {
        var $header = $('#global-nav');
        // Nav Fixed
        $(window).scroll(function () {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function () {
            $header.toggleClass('open');
        });
    });
})(jQuery);

//hamburger-menu


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

//loading

$(function () {
    var h = $(window).height();

    $('#all').css('display', 'none');
    $('#loading-body ,#loader').height(h).css('display', 'block');
});

$(window).load(function () { //全ての読み込みが完了したら実行
    $('#loading-body').delay(900).fadeOut(800);
    $('#load').delay(600).fadeOut(300);
    $('#all').css('display', 'block');
});

//loading