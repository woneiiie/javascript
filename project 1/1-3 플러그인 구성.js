// 플러그인 등록
$.fn.imageSlider = function(object){
    // 변수 선언
    const width = object.width || 460;
    const height = object.width || 300;
    const current = 0;
    // 함수 선언
    const moveTo = function(){
        $(this).find(',images').animate({
            left: -current * width
        }, 1000);
    };
    // 슬라이더 내부의 이미지 개수 확인
    const imageLength = $(this).find('.image').length;
    // 슬라이더 버튼 추가
    for (let i = 0; i < imageLength; i ++) {
        $('<button></button>')
        .attr('data-position', i)
        .text(i)
        .click(function(){
            current = $(this).attr('data-position');
            moveTo();
        })
        .insertBefore(this);
    }
    // 슬라이더 스타일 설정
    $(this).css({
        position: 'relative',
        width: width,
        height: height,
        overflow: 'hidden'
    });
    $(this).find('.images').css({
        margin: 0,
        padding: 0,
        width: width,
        height: height,
        display: 'block',
        float: 'left'
    });
    // 3초마다 슬라이더 이동
    setInterval(function (){
        current = current + 1;
        current = current % imageLength;
        moveTo();
    }, 3000);
};
