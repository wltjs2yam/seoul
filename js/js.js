//스크롤이 되면 헤더 모양 바뀜
const header = document.querySelector('header');

window.addEventListener('scroll', function(){
  if(window.scrollY > 800){
    header.classList.add('on');} 
    
  if( window.scrollY <= 800){
    header.classList.remove('on');
  }
})


// 모바일 상태에서 메뉴슬라이드 / 닫기
const triggerBtn = document.querySelector('.trigger')
const moNav = document.querySelector('nav')
const closeBtn = document.querySelector('.close')

triggerBtn.addEventListener('click',function(e){
    e.preventDefault();
    moNav.classList.add('active');

closeBtn.addEventListener('click',function(){
    moNav.classList.remove('active')
})   
})

// 명소, 음식 등의 메뉴 아이템과 각 섹션을 연결
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

// 각 메뉴 아이템 클릭 시 해당 섹션으로 스크롤 이동
navLinks.forEach((link, index) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    sections[index].scrollIntoView({ behavior: 'smooth' });


  });
});

// 김지선 메인 (명소부분 ) js
var swiper = new Swiper(".mySwiper", {
  loop:true,
  autoplay: {
    delay:3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 여기까지