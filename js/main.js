$(function(){
        $('#fullpage').fullpage({
            //options here
            anchors: ['section1', 'section2', 'section3'],
            autoScrolling:true,
            navigation:true,
            navigationPosition: 'left',
            sectionsColor: ['#F4F4F4','#F2F2F2','#F4F4F4'],
            loopTop: true,
            loopBottom: true,

            // afterLoad: function(anchorLink, index){
            //     console.log("현재 섹션 번호는" + index);},
            //     if(index == 5){
            //          alert('마지막입니다.');
            //     },
    });
});

$(document).ready(function() {
    $(".sec2Wrap").lightSlider({
        loop:true,
        keyPress:true,
        vertical:true,
    });
});
