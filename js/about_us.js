function showText() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

window.addEventListener("load", () => {
  $(".carousel-images").owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    autoWidth: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
    },
  });

  $(".customers-cards").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
    },
  });
});
