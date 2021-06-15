console.log(document.getElementById('title').textContent);
document.getElementById('title').textContent


// スクロールしたらふわっと出てくる
const screenHeight = window.parent.screen.height;
window.onscroll = scrolled;
function scrolled(){
  let serviceListHeight = document.getElementById("service-list").getBoundingClientRect().top;
  let serviceFeatureHeight = document.getElementById("service-feature").getBoundingClientRect().top;
  let servicePlanHeight = document.getElementById("service-plan").getBoundingClientRect().top;
  let comparisonHeight =  document.getElementById("comparison").getBoundingClientRect().top;
  let workTimeHeight = document.getElementById("work-time").getBoundingClientRect().top;
  let flowHeight = document.getElementById("flow").getBoundingClientRect().top;
  let serviceDetailHeight = document.getElementById("service-detail").getBoundingClientRect().top;
  let faqHeight = document.getElementById("faq").getBoundingClientRect().top;
  let consultationHeight = document.getElementById("consultation").getBoundingClientRect().top;
  let inquiryHeight = document.getElementById("inquiry").getBoundingClientRect().top;
  if(serviceListHeight < screenHeight * 0.5){
    Array.from(document.getElementById("service-list").children).forEach((element) => {
      element.style.opacity = 1;
    })
  }
  if(serviceFeatureHeight < screenHeight * 0.5){
    Array.from(document.getElementById("service-feature").children).forEach((element) => {
      element.style.opacity = 1;
    })
  }
  if(servicePlanHeight < screenHeight * 0.5){
    Array.from(document.getElementById("service-plan").children).forEach((element) => {
      element.style.opacity = 1;
    })
  }
  if(comparisonHeight < screenHeight * 0.5){
    Array.from(document.getElementById("comparison").children).forEach((element) => {
      element.style.opacity = 1;
    })
  }
  if(workTimeHeight < screenHeight * 0.5){
    Array.from(document.getElementById("work-time").children).forEach((element) => {
      element.style.opacity = 1;
    })
  }
  if(flowHeight < screenHeight * 0.5){
    Array.from(document.getElementById("flow").children).forEach((element) => {
      element.style.opacity = 1;
    })
  }
  if(serviceDetailHeight < screenHeight * 0.5){
    Array.from(document.getElementById("service-detail").children).forEach((element) => {
      element.style.opacity = 1;
    })
  }
  if(faqHeight < screenHeight * 0.5){
    Array.from(document.getElementById("faq").children).forEach((element) => {
      element.style.opacity = 1;
    })
  }
  if(consultationHeight < screenHeight * 0.5){
    Array.from(document.getElementById("consultation").children).forEach((element) => {
      element.style.opacity = 1;
    })
  }
  if(inquiryHeight < screenHeight * 0.5){
    Array.from(document.getElementById("inquiry").children).forEach((element) => {
      element.style.opacity = 1;
    })
  }
}

// ヘッダーのポップアップの削除
document.getElementById("header-popup-close").onclick = function(){
  document.getElementById("header-popup").style.display = "none";
}

// ハンバーガーバーのメニュー表示/非表示
document.getElementById("humberger-menu-icon").onclick = function(){
  document.getElementById("humberger-menu").classList.toggle("active");
  if(document.getElementById("humberger-menu-icon").className == "fas fa-bars"){
    document.getElementById("humberger-menu-icon").classList.remove("fa-bars");
    document.getElementById("humberger-menu-icon").classList.add("fa-times");
  }
  else if(document.getElementById("humberger-menu-icon").className == "fas fa-times"){
    document.getElementById("humberger-menu-icon").classList.remove("fa-times");
    document.getElementById("humberger-menu-icon").classList.add("fa-bars");
  }
}

// swiper.jsのオプション
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// お問い合わせのコンソール表示
document.getElementById("submit-btn").onclick = function(event){
  // event.preventDefault();
  let inputContent = [document.getElementById("name").value,
                      document.getElementById("company").value,
                      document.getElementById("email").value,
                      document.getElementById("interview").value,
                      document.getElementById("content").value,
                      ];
  console.log(inputContent);
}