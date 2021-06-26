$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $anchor.parent().addClass('on').siblings().removeClass('on');

    $('html, body').stop().animate({
        scrollTop: ($($anchor.atrr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault(); //a태그의 링크기능 없애기
});

$(window).scroll(function(){
    //스크롤이 될때마다 위치를 담아라
    var scrollTopPos = $(window).scrollTop();
    if(scrollTopPos > 0){ //스크롤을 아래로 내리는 순간 처리
        $("body").addClass("scroll");
    }
    else{ //스크롤이 완전 위에 닿았을때 처리
        $("body").removeClass('scroll');
    }
});



$("#interview dt").click(function(){
    //click하게되면 autoDt를 clear해준다.
    clearInterval(autoDt);
    //siblings로 다른애들의 클래스를 빼준다.
    $(this).toggleClass('on').siblings().removeClass('on');
});

//3) dtnum의 값을 선언해준다.
var dtnum = 0;
var autoDt= setInterval(function(){
                    dtnum++;
                    //4)dtnum의 값을 계속 ++해주겠다.
                    dtnum = dtnum % 5;
                    //5) 5로 나누어줘서 나머지 값들을 dtnum으로 선언한다.
                    $("#interview dt").eq(dtnum).click();
                    //2)equal 함수는 0부터 시작한다. eq()에 숫자를 담을 변수 선언이 필요하다.
                    }, 2000);
                    //1)2초마다 앞에 있는 일을 벌이겠다. 

//setInterval 함수는 순서대로 일어나게 해준다.

