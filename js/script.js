$(document).ready(function(){
    var currentPosition = parseInt($(".menu").css("top"));
    $(window).scroll(function() {
      var position = $(window).scrollTop(); 
      $(".menu").stop().animate({"top":position+currentPosition+"px"}, 1000);
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.quickmenu_wrap ul li a');
    const sections = document.querySelectorAll('.sub_content');

    // 부드러운 스크롤 이동 설정
    // menuItems.forEach(item => {
    //     item.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href').substring(1);
    //         const targetElement = document.getElementById(targetId);
    //         targetElement.scrollIntoView({ behavior: 'smooth' });
    //     });
    // });

    function onScroll() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('quickmenu_active');
            if (item.getAttribute('data-target') === currentSection) {
                item.classList.add('quickmenu_active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();  // 초기 상태 설정

});





/* swiper 슬라이드 설정 */
var swiper = new Swiper('.main_slide .swiper-container', {
    // Optional parameters
    // direction: 'horizontal',
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    loopAdditionalSlides : 1,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay:{
        delay: 3000,
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    
});




jQuery(document).ready(function () {
	// 윈도우 로드 후 부드럽게 보여주기
	jQuery(window).load(function () {
		fadeSlider();
		fadeTo();
		return false;
	});


 // data-aos="fade-up" data-aos-duration="800"
});

$(function(){
	$('.type').typed({
		//strings:["오늘은 월요일","한주의 시작이다","기분좋게 공부하고<br>주말까지 힘내자"],   // 입력될 내용 삽입하기
		
		strings:["WEB PORTFOLIO"],   // 여러줄 삽입하기
		typeSpeed: 200, // type 속도
		backDelay: 5000,
		loop: true //false는 한번만 실행
	});
});