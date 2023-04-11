// swiper ________________________________________________________________
const swiper = new Swiper(".slider-main-block", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".body-main-block__arrow.swiper-button-next",
    prevEl: ".body-main-block__arrow.swiper-button-prev",
  },
});

// button underline decoration ______________________________________________________
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
      }
    });
  }
  targetElement.classList.add("active");
  tabsItems[currentAciveIndex].classList.remove('active');
  tabsItems[newActiveIndex].classList.add('active');
});

// starts rating 1 _____________________________________________________________
const ratings = document.querySelectorAll('.item-reviews__raiting');
if(ratings.length > 0){
  initRatings();
}

function initRatings(){
  let ratingActive, ratingValue;
  for(let i = 0; i < ratings.length; i++){
    const rating = ratings[i];
    console.log(rating);

    ratingVars(rating);
    getRatingActiveWidth();
    setRatingActiveWidth(rating);
  }

  function ratingVars(rating){
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }

   function getRatingActiveWidth(index = ratingValue.innerHTML){
    let ratingActiveWidhtIndex = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidhtIndex}%`
    
   }

   function setRatingActiveWidth(rating){
    const ratingItems = rating.querySelectorAll('.rating__item');
    for(let i = 0; i < ratingItems.length; i++){
      const ratingItem = ratingItems[i];


      ratingItem.addEventListener('mouseenter', function(){
        getRatingActiveWidth(ratingItem.value);
      })
      ratingItem.addEventListener('mouseleave', function(){
        getRatingActiveWidth(ratingValue.innerHTML);
      })

      ratingItem.addEventListener('click', function(){
        
        ratingValue.innerHTML = i + 1;
        
      })
    }

    
   }
}
// starts rating 2 _____________________________________________________________
const ratings_2 = document.querySelectorAll('.item-reviews__raiting_2');
if(ratings_2.length > 0){
  initRatings_2();
}

function initRatings_2(){
  let ratingActive_2, ratingValue_2;
  for(let i = 0; i < ratings_2.length; i++){
    const rating_2 = ratings_2[i];

    ratingVars_2(rating_2);
    getRatingActiveWidth_2();
    setRatingActiveWidth_2(rating_2);
  }

  function ratingVars_2(rating_2){
    ratingActive_2 = rating_2.querySelector('.rating__active_2');
    ratingValue_2 = rating_2.querySelector('.rating__value_2');
  }

   function getRatingActiveWidth_2(index = ratingValue_2.innerHTML){
    let ratingActiveWidhtIndex_2 = index / 0.05;
    ratingActive_2.style.width = `${ratingActiveWidhtIndex_2}%`
    
   }

   function setRatingActiveWidth_2(rating_2){
    const ratingItems_2 = rating_2.querySelectorAll('.rating__item_2');
    for(let i = 0; i < ratingItems_2.length; i++){
      const ratingItem_2 = ratingItems_2[i];


      ratingItem_2.addEventListener('mouseenter', function(){
        getRatingActiveWidth_2(ratingItem_2.value);
      })
      ratingItem_2.addEventListener('mouseleave', function(){
        getRatingActiveWidth_2(ratingValue_2.innerHTML);
      })

      ratingItem_2.addEventListener('click', function(){
        
        ratingValue_2.innerHTML = i + 1;
        
      })
    }

    
   }
}
// starts rating 3 _____________________________________________________________
const ratings_3 = document.querySelectorAll('.item-reviews__raiting_3');
if(ratings_3.length > 0){
  initRatings_3();
}

function initRatings_3(){
  let ratingActive_3, ratingValue_3;
  for(let i = 0; i < ratings_3.length; i++){
    const rating_3 = ratings_3[i];

    ratingVars_3(rating_3);
    getRatingActiveWidth_3();
    setRatingActiveWidth_3(rating_3);
  }

  function ratingVars_3(rating_3){
    ratingActive_3 = rating_3.querySelector('.rating__active_3');
    ratingValue_3 = rating_3.querySelector('.rating__value_3');
  }

   function getRatingActiveWidth_3(index = ratingValue_3.innerHTML){
    let ratingActiveWidhtIndex_3 = index / 0.05;
    ratingActive_3.style.width = `${ratingActiveWidhtIndex_3}%`
    
   }

   function setRatingActiveWidth_3(rating_3){
    const ratingItems_3 = rating_3.querySelectorAll('.rating__item_3');
    for(let i = 0; i < ratingItems_3.length; i++){
      const ratingItem_3 = ratingItems_3[i];


      ratingItem_3.addEventListener('mouseenter', function(){
        getRatingActiveWidth_3(ratingItem_3.value);
      })
      ratingItem_3.addEventListener('mouseleave', function(){
        getRatingActiveWidth_3(ratingValue_3.innerHTML);
      })

      ratingItem_3.addEventListener('click', function(){
        
        ratingValue_3.innerHTML = i + 1;
        
      })
    }

    
   }
}