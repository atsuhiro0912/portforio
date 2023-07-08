

$(document).ready(function() {
  $(window).scroll(function() {
    var button = $('#back-to-top');
    if ($(this).scrollTop() > 80) {
      button.addClass('visible').removeClass('hidden');
    } else {
      button.addClass('hidden').removeClass('visible');
    }
  });

  $('#back-to-top').click(function(e) {
    e.preventDefault();
    var duration = 500;
    $('html, body').animate({ scrollTop: 0 }, duration);
  });
});

//

new Swiper( '.swiper-container', {
  speed: 400,
  spaceBetween: 40,
  width: 400,
  loop: true,
  loopedSlides: 6,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 24,
      width: 274,
    }
  }
});


window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

  // ハンバーガーメニューのアイコン要素を取得
  var drawerCheckbox = document.getElementById('drawer_input');
  // メニュー要素を取得
  var navContent = document.querySelector('.nav_content');
  
  // メニューの表示・非表示を切り替える関数
  function toggleMenu() {
    navContent.classList.toggle('open');
  }
  
  // ハンバーガーメニューのチェックボックスの状態が変化したらメニューを切り替える
  drawerCheckbox.addEventListener('change', toggleMenu);
  
  // メニュー内のリンクがクリックされたらメニューを閉じる
  var navLinks = document.querySelectorAll('.nav_item a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navContent.classList.remove('open');
      drawerCheckbox.checked = false;
    });
  });
