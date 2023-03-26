const swiper = new Swiper(".slider-main-block", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".body-main-block__arrow.swiper-button-next",
    prevEl: ".body-main-block__arrow.swiper-button-prev",
  },
});

let tabsButtons = document.querySelectorAll(".tabs-deals__button");
let tabsItems = document.querySelectorAll(".item-tabs");
document.addEventListener("click", (e) => {
  let targetElement = e.target;
  let currentAciveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest(".tabs-deals__button")) {
    tabsButtons.forEach((tabsBotton, index) => {
      if (tabsBotton.classList.contains("active")) {
        currentAciveIndex = index;
        tabsBotton.classList.remove("active");
      }
      if (targetElement === tabsBotton) {
        newActiveIndex = index;
        console.log(newActiveIndex);
      }
    });
  }
  targetElement.classList.add("active");
  tabsItems[currentAciveIndex].classList.remove('active');
  tabsItems[newActiveIndex].classList.add('active');
});

// let tabNavItems = document.querySelectorAll('.tabs-deals__button');
// let tabItems = document.querySelectorAll('.item-tabs');

// document.addEventListener('click', function (e){
//   let targetElement = e.target;
//   let currentActiveIndex = null;
//   let newActiveIndex = null;
//   if(targetElement.closest('.tabs-deals__button')){
//     tabNavItems.forEach((tabNavItem, index) =>{
//       if(tabNavItem.classList.contains('active')){
//         currentActiveIndex = index;
//         tabNavItem.classList.remove('active');
//       }
//       if(tabNavItem === targetElement){
//         newActiveIndex = index;
//       }
//     });
//     targetElement.classList.add('active');
//     tabItems[currentActiveIndex].classList.remove('active');
//     tabItems[newActiveIndex].classList.add('active');
//   }
// })
