// a 클릭시 발생하는 default event 제거
$(document).on("click", 'a[href="#"]', function (event) {
    event.preventDefault();
});

//gnb메뉴
$(function () {
    $(".innerHeader .menuOpen").on("click", function () {
        $(".gnb").addClass("on");
    });
    $(".gnb .close").on("click", function () {
        $(".gnb").removeClass("on");
    });
});

// fixHeader
let scrollPos = 0;
scrollPos = $(document).scrollTop();
fixHeader();

$(window).on("scroll resize", function () {
    scrollPos = $(document).scrollTop();
    fixHeader();
});

//fixHeader 함수
function fixHeader() {
    if (scrollPos > 150) {
        $("header").addClass("on");
    } else {
        $("header").removeClass("on");
    }
}

// 상단이동 부드럽게
$(function () {
    $(".goTop").on("click", function () {
        let top = $("body").offset().top;
        $("html, body").animate({ scrollTop: top }, 400);
    });
});

/* $(function() {            
    $('.goTop').on('click', function() {
        var top = $('body').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 400 );  
    });     
});  */

// 스크롤 애니메이션
$(function () {
    $(".animate").scrolla({
        mobile: true, //모바일버전시 활성화
        once: true, //스크롤시 딱 한번만 하고싶을땐 true
    });
});

//.top-visual 이미지슬라이드
$(function () {
    $(".visual .slide").slick({
        arrows: true, //화살표
        dots: false, //인디케이터 해제
        fade: true, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 4000, //재생시간
        pauseOnHover: false, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus: false,
    });
});
