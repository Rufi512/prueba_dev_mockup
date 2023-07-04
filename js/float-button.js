const button = document.getElementById("open-floats")
const floatModal = document.getElementById("float-buttons")
const menuSocial = floatModal.querySelector('ul')
const footer = document.querySelector('footer')
let delay = 50 //height to wait in scroll

button.addEventListener('mouseenter',()=>{
     menuSocial.style.maxHeight = '248px'
     menuSocial.style.visibility = 'visible'
     menuSocial.style.opacity = 1
})

floatModal.addEventListener('mouseleave',()=>{
    menuSocial.style.maxHeight = '0px'
    menuSocial.style.visibility = 'hidden'
    menuSocial.style.opacity = 0
})


window.addEventListener('load',()=>{
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
})

//After pass header

window.addEventListener('scroll',()=>{
    
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    
    if(window.scrollY <= 30){
       return floatModal.classList.remove('container-float-buttons-visible')
    } 

    //Observer when scroll to footer
    if(maxHeight + delay - footer.offsetHeight <= window.scrollY){
        return floatModal.classList.remove('container-float-buttons-visible')
    }

    floatModal.classList.add('container-float-buttons-visible')
})

