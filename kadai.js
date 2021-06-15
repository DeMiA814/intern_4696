'use strict';

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('success loaded!')
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    hamburger.onclick = function() {
        console.log('on click.');
        nav.classList.toggle('show')
        if (hamburger.classList.contains('fa-bars')) {
            hamburger.classList.remove('fa-bars');
            hamburger.classList.add('fa-times');
        } else {
            hamburger.classList.remove('fa-times');
            hamburger.classList.add('fa-bars');
        }
    };

});

window.addEventListener('DOMContentLoaded', (event) => {
    function showElementAnimation() {

        var element = document.getElementsByClassName('js-animation');
        if (!element) return; // 要素がなかったら処理をキャンセル

        var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
        var scrollY = window.pageYOffset;
        var windowH = window.innerHeight;

        for (var i = 0; i < element.length; i++) {
            var elemClientRect = element[i].getBoundingClientRect();
            var elemY = scrollY + elemClientRect.top;
            if (scrollY + windowH - showTiming > elemY) {
                element[i].classList.add('is-show');
            } else if (scrollY + windowH < elemY) {
                // 上にスクロールして再度非表示にする場合はこちらを記述
                element[i].classList.remove('is-show');
            }
        }
    }
    showElementAnimation();
    window.addEventListener('scroll', showElementAnimation);
});
window.addEventListener('DOMContentLoaded', (event) => {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});

// document.getElementsByClassName('Form-Btn'). = function() {
// console.log('sended!')
// console.log(document.getElementsByClassName('Form-Item-Input'))
// }
window.addEventListener('DOMContentLoaded', (event) => {
    // var func1 = function() {
    //     console.log(document.getElementsByClassName('FA')[0])
    //     console.log(document.getElementsByClassName('FB')[0])
    //     console.log(document.getElementsByClassName('FC')[0])
    //     console.log(document.getElementsByClassName('Form-Item-Textarea')[0])
    //     console.log('sended!')
    // };
    // document.querySelector('.Form-Btn').onclick = func1;


    document.getElementById('Btn').onclick = function() {
        const textboxA = document.getElementById("FA")
        const textboxB = document.getElementById("FB")
        const textboxC = document.getElementById("FC")
        const textboxD = document.getElementById("FD")
        const valueA = textboxA.value
        const valueB = textboxB.value
        const valueC = textboxC.value
        const valueD = textboxD.value

        console.log(valueA);
        console.log(valueB);
        console.log(valueC);
        console.log(valueD);
    }
});