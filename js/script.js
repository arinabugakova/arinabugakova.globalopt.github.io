$(document).ready(function(){
    $('.carousel__block').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next.png"</button>',
        slidesToShow: 1,
    });

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    });
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    });
    
  });