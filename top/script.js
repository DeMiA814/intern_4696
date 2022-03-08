document.addEventListener('DOMContentLoaded', function() {
    let popup = document.getElementById('js-popup');
    if(!popup) return;
    popup.classList.add('is-show');
  
    let closeBtn = document.getElementById('js-close-btn');

    closePopUp(closeBtn);

    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.remove('is-show');
      })
    }
  
let hamburgermenu = document.getElementById('hamburger-menu-icon')
let hamburger = document.getElementById('hamburger-menu')

let changeElement = (el)=> {

  if(el.style.display==''){
     el.style.display='none';
     }else{
    el.style.display='';
  }
  }

hamburgermenu.addEventListener('click', ()=> {
changeElement(hamburger);
}, false);

let changehamburger = document.getElementById("hamburger-menu-icon")

 changehamburger.addEventListener('click', function(){
  if(changehamburger.classList.contains("fa-bars")){
    changehamburger.classList.remove("fa-bars");
    changehamburger.classList.add("fa-times");
  }else{
    changehamburger.classList.remove("fa-times");
    changehamburger.classList.add("fa-bars");
  }
 })

let formbotton = document.getElementById('form-button')

formbotton.addEventListener('click', function(event){
event.preventDefault();
let personal = document.getElementById('form').personal.value
let company = document.getElementById('form').company.value
let mailaddress = document.getElementById('form').mailaddress.value
let checkbox = document.getElementById('form').checkbox.value
let inquirycontent = document.getElementById('form').inquirycontent.value
let array = [personal,company,mailaddress,checkbox,inquirycontent]
console.log(array);
})

let scrollAnimationElm = document.querySelectorAll('.sa');
scrollAnimationElm2 = document.getElementById('section');

console.log(scrollAnimationElm);

let scrollAnimationFunc = function() {
  for(let i = 0; i < scrollAnimationElm.length; i++) {
    let triggerMargin = 300;
    if (window.innerHeight > scrollAnimationElm[i].
      getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
      // console.log(scrollAnimationElm[i])
    }
  }
}

document.addEventListener('scroll', scrollAnimationFunc);
const swiper = new Swiper(".swiper", {
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

  }
)



