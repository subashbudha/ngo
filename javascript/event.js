// const slides = document.querySelectorAll(".slide")
// var counter = 0;

// slides.forEach(
//     (slide, event) => { 
//         slide.style.left = `$(event * 100)%`
//     }
// )

// const goPrev = () => {
//     counter --
//     slideImage()
// }

// const goNext = () => {
//     counter ++ 
//     slideImage()
// }

// const slideImage = () => {
//     slides.forEach(
//         (slide) => {
//             slide.style.transform = 'translateX(-${counter * 100}%)'
//         }
//     )
// }

var swiper = new Swiper(".mySwiper", {
    slidePreview: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });