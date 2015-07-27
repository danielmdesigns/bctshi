//Javascript, jQuery, and AJAX
$(document).ready(function(){
  "use strict";
  // load index page when the page loads
  $(".main-container").load("shop.html");
  // load page when nav link clicked
  $("#shop").click(function(){
	  $(".main-container").load("shop.html");
  });
  $("#faqs").click(function(){
	  $(".main-container").load("faqs.html");
  });
  $("#richie").click(function(){
	  $(".main-container").load("artist/richie.html");
  });
  $("#shay").click(function(){
	  $(".main-container").load("artist/shay.html");
  });
  $("#jose").click(function(){
	  $(".main-container").load("artist/jose.html");
  });
  $("#marie").click(function(){
	  $(".main-container").load("artist/marie.html");
  });
  $("#simon").click(function(){
	  $(".main-container").load("artist/simon.html");
  });
  $("#jaimie").click(function(){
	  $(".main-container").load("artist/jaimie.html");
  });
  $("#andrew").click(function(){
	  $(".main-container").load("artist/andrew.html");
  });
  $("#teddie").click(function(){
	  $(".main-container").load("artist/teddie.html");
  });
  
  //collapse menu & submenu's when <= 767px
  var resize = function(){
  if($(window).width() <= 767){
	  $(".dropdown-menu").click(function(){
	  $(".navbar-collapse").collapse('hide');
	  });
	}
	if($(window).width() < 767){
	  $("#shop").on("click", function(){
		  $(".navbar-collapse").collapse("hide");
	  });
	}
	if($(window).width() < 767){
	  $("#faqs").on("click", function(){
		  $(".navbar-collapse").collapse("hide");
	  });
	}
	if($(window).width() < 767){
	  $("#contact").on("click", function(){
		  $(".navbar-collapse").collapse("hide");
	  });
	}
  };
  //calling resize function
  $(window).resize(resize);
  resize();
  
  //slowing down the testimonials
  $('.carousel').carousel({
	interval: 1000 * 20
  });
  
});