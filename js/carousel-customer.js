const customers = $('.carousel-customer')

customers.owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoWidth:true,
    center:true,
    responsive:{
        0:{
            items:1,
            nav:false

        }
    }
})

  // Go to the next item
  const leftPage = ()=>{
    customers.trigger('prev.owl.carousel');
  }
  
  const rightPage = () =>{
      customers.trigger('next.owl.carousel');
  
  }