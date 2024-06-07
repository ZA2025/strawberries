$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 3,
    dots: false,
    centerMode: true,
    arrows: false,
    responsive: [
      {
          breakpoint: 480, // This means 480px and below
          settings: {
              slidesToShow: 1, // Show only 1 slide on screens smaller than 480px
              centerMode: true, // Disable center mode on small screens
              // You can add more settings here
          }
      }
  ]
    });
  });