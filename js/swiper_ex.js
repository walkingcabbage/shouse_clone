var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper1 = new Swiper(".innerBoxS", {
  slidesPerView: 'auto',
  freeMode: true,
});
var swiper2 = new Swiper(".sec10S", {
  slidesPerView: 'auto',
  speed: 600,
  loop: false,
  spaceBetween: 0,
  allowTouchMove: true,
  pagination: {
    el: '.sec10 .pager',
    type: "fraction"
  },
  scrollbar: {
    el: '.sliderScrollbar'
  },
  navigation: {
    nextEl: '.sliderNext1',
    prevEl: '.sliderPrev1'
  },
});




window.addEventListener('resize',addSwclass);

function addSwclass(){
  const arti=document.querySelector('.sec4MiddleInner');
  const artiul=document.querySelector('.sec4MiddleInner>ul');
  const artisp=document.querySelectorAll('.sec4MiddleInner>span.swiper-notification');
  const artili=document.querySelectorAll('.sec4MiddleInner>ul>li');
  if (window.matchMedia('(max-width:767px)').matches==true) {
    if(!arti.classList.contains('swiper')){
      arti.classList.add('swiper');
      artiul.classList.add('swiper-wrapper');
      for(let i=0;i<artili.length;i++){
        artili[i].classList.add('swiper-slide');
      }
      var swiper3 = new Swiper(".sec4MiddleInner", {
        slidesPerView: 'auto',
        freeMode: true,
      });
    }
  }else{
    arti.classList.remove('swiper');
    artiul.classList.remove('swiper-wrapper');
    for(let i=0;i<artili.length;i++){
      artili[i].classList.remove('swiper-slide');
    }
    for(let i=0;i<artisp.length;i++){
      artisp[i].remove();
    }
  }
}
addSwclass();