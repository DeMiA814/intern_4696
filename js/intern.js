'use strict';

// ポップアップの削除
let cancel = document.getElementById('pop-cancel')
let pop = document.getElementById('pop')

cancel.addEventListener('click', function () {
  pop.classList.toggle('pop-hide');
}, false);

// menuの動き
let menu = document.getElementById('burger')
let menucancel = document.getElementById('burger-cancel')
let burgermenu = document.getElementById('burger-menu')

menu.addEventListener('click', function () {
  this.classList.toggle('burger-hide');
  menucancel.classList.toggle('cancel-appear');
  burgermenu.classList.toggle('cancel-appear');
}, false);

// ゆっくり現れる部分の実装

const options = {
  threshold: 0.8
};

const showups = document.querySelectorAll(".showup");

const callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("show");
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.add("show");
    }
  });
}

const io = new IntersectionObserver(callback, options);
showups.forEach((showup) => {
  io.observe(showup);
});


// カルーセルUIの実装

var Swiper = new Swiper('.swiper-container', {
  loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
  direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
  autoplay: false,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// フォーム記入内容を読み取る

var form = document.querySelector('.inquiry-form');
form.onsubmit = function (event) {
  event.preventDefault();
  let interview = "面談なし"
  if (form.interview.checked === true) {
    interview = "面談希望"
  }
  console.log(
    '名前:', form.name.value,
    '会社:', form.company.value,
    'email:', form.email.value,
    '面談:', interview,
    '質問:', form.question.value,
  );
};