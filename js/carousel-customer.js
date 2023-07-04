const customers = $('.carousel-customer')

customers.owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoWidth:true,
    center:true,
    nav:false,
    dots:false,
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

  //Team videos
const playVideo = (id)=>{
    const videoContainer = document.getElementById(id)
    videoContainer.querySelector('.player-preview').style.opacity = 0 
    videoContainer.querySelector('.player-preview').style.visibility = 'hidden' 
    videoContainer.querySelector('.video-player').play()
  }
  
  const stopVideos = ()=>{
    const containersVideos = document.querySelectorAll('.video-player')
    containersVideos.forEach((el)=>{
      el.pause()
      el.currentTime = 0
    })
  
    document.querySelectorAll('.player-preview').forEach((el)=>{
      el.style.opacity = 1
      el.style.visibility = 'visible'
    })
  }
  

  customers.on('changed.owl.carousel', function(event) {
    stopVideos()
})