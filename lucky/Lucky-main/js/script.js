 // Second carousel

const quoteCarousel = new Carousel(document.querySelector("#quoteCarousel"), {
  infinite: false,
  Dots: false,
  friction: 0.88,
  slidesPerPage: 1,
});


// Carousel @fancyapps
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
  on: {
    createSlide: (carousel, slide) => {
      slide.Panzoom = new Panzoom(slide.$el.querySelector(".panzoom"), {
        panOnlyZoomed: true,
        resizeParent: true,
      });
    },
    deleteSlide: (carousel, slide) => {
      if (slide.Panzoom) {
        slide.Panzoom.destroy();
        slide.Panzoom = null;
      }
    },
  },
});














