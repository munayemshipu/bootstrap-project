
$(document).ready(function(){
  $(".slider-area").owlCarousel({
  	items:1,
  	nav: true,
  	dots: true,
  	autoplay:true,
  	autoplayTimeout:3000,
  	loop:true,
  	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  });
});
