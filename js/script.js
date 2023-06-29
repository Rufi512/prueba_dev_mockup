window.addEventListener('scroll',(e)=>{
  if(window.scrollY >= 60){
    document.querySelector('.header').classList.add('header-bg')
    return
  }

    document.querySelector('.header').classList.remove('header-bg')
})
