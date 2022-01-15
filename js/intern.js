'use strict'

document.getElementById('popup-close').onclick = function() {
    popup.style.display = "none";
}

var clickNumber = 0;
function clickbtnA() {
    clickNumber++;
    if((clickNumber%2)===0){
        document.getElementById('humberger-menu-icon').className="fas fa-bars";
    }else{
        document.getElementById('humberger-menu-icon').className="far fa-window-close";
    }
}

document.getElementById('humberger-menu').style.display="none";
function clickbtnB() {
    const hum = document.getElementById('humberger-menu');
    if(hum.style.display==="initial") {
        hum.style.display="none";
    }else {
        hum.style.display="initial"
    }
}

$(function(){
    $('.single-item').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        fade: true,
    });
});

document.getElementById('submit').onsubmit = function() {
    console.log('送信されました');
}

document.getElementById('submit').onsubmit = function clicksbmA () {
    const manager = document.getElementById('manager');
    console.log('manager');
}

document.getElementById('submit').onsubmit = function clicksbmB () {
    console.log('customer');
    const adress = document.getElementById('adress');
}

document.getElementById('submit').onsubmit = function clicksbmC() {
    const adress = document.getElementById('adress');
    console.log('adress');
}

document.getElementById('submit').onsubmit = function() {
}

document.getElementById('submit').onsubmit = function clicksbmE() {
    const content = document.getElementById('content');
    console.log('content');
}

var scrollAnimationElm = document.querySelectorAll('.main-wrap1', '.main-wrap2', '.main-wrap3', '.main-wrap4', '.main-wrap5', '.main-wrap6', '.main-wrap7', '.main-wrap8', '.main-wrap9', '.main-wrap10');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 300;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

