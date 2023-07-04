const customers = $(".carousel-customer");

customers.owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  autoWidth: false,
  center: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
  },
});

// Go to the next item
const leftPage = () => {
  customers.trigger("prev.owl.carousel");
};

const rightPage = () => {
  customers.trigger("next.owl.carousel");
};

//Team videos
const playVideo = (e) => {
  e.classList.add("player-active");
  e.parentNode.querySelector(".video-player").play();
};

const stopVideos = () => {
  const containersVideos = document.querySelectorAll(".video-player");
  containersVideos.forEach((el) => {
    el.pause();
    el.currentTime = 0;
  });

  document.querySelectorAll(".player-preview").forEach((el) => {
    el.classList.remove("player-active");
  });
};

customers.on("changed.owl.carousel", function (event) {
  stopVideos();
});
