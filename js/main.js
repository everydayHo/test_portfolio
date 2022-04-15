const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 1, //한번에 보여줄 슬라이드 개수
	spaceBetween: 0, //슬라이드 사이 여백
	centeredSlides: true, //  1번 슬라이드가 가장 먼저 보이기
	loop: true,
	autoplay: {
		delay: 3000,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
