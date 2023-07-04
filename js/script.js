window.addEventListener('scroll',(e)=>{
  if(window.scrollY >= 60){
    document.querySelector('.header').classList.add('header-bg')
    document.querySelector('.top-header').classList.add('top-header-bg')
    return
  }

    document.querySelector('.header').classList.remove('header-bg')
    document.querySelector('.top-header').classList.remove('top-header-bg')
})

window.addEventListener('load',()=>{
  $('.carousel-products').owlCarousel({
    loop:true,
    margin:60,
    responsiveClass:true,
    center:true,
    autoWidth:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true

        },
        600:{
            items:3,
            nav:false,
            loop:true

        },
        1000:{
            items:3,
            nav:false,
        }
    }
})


})

