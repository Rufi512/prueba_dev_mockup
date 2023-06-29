window.addEventListener('scroll',(e)=>{
  if(window.scrollY >= 60){
    document.querySelector('.header').classList.add('header-bg')
    return
  }

    document.querySelector('.header').classList.remove('header-bg')
})
let customers

window.addEventListener('load',()=>{
  $('.owl-carousel').owlCarousel({
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

customers = $('.carousel-customer')
  customers.owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoWidth:true,
    responsive:{
        0:{
            items:1,
            nav:false

        }
    }
})



})

  // Go to the next item
const leftPage = ()=>{
  customers.trigger('prev.owl.carousel');
}

const rightPage = () =>{
    customers.trigger('next.owl.carousel');

}