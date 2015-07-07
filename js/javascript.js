  //Javascript, jQuery, and AJAX
  /*$(document).ready(function(){
	  $("#shop").click(function(){
		  $(".main-container").load("index.html");
	  });
  });

  $(document).ready(function(){
	  $("#faqs").click(function(){
		  $(".main-container").load("faqs.html");
	  });
  });*/
  
  
//this shit worked, hahahha!!!
//PLAYGROUND - need to add/remove actives 
$(document).ready(function () {
    // load index page when the page loads
    $(".main-container").load("shop.html");
    $("#shop").click(function () {
        // load home page on click
        $(".main-container").load("shop.html");
    });
    $("#faqs").click(function () {
        // load about page on click
        $(".main-container").load("faqs.html");
    });
	$("#richie").click(function () {
        // load contact form onclick
        $(".main-container").load("artist/richie/richie.html");
    });
    $("#shay").click(function () {
        // load contact form onclick
        $(".main-container").load("artist/shay/shay.html");
    });
    $("#jose").click(function () {
        // load contact form onclick
        $(".main-container").load("artist/jose/jose.html");
    });
    $("#marie").click(function () {
        // load contact form onclick
        $(".main-container").load("artist/marie/marie.html");
    });
	$("#simon").click(function () {
        // load contact form onclick
        $(".main-container").load("artist/simon/simon.html");
    });
	$("#jaimie").click(function () {
        // load contact form onclick
        $(".main-container").load("artist/jamie/jaimie.html");
    });
	$("#andrew").click(function () {
        // load contact form onclick
        $(".main-container").load("artist/andrew/andrew.html");
    });
	$("#teddie").click(function () {
        // load contact form onclick
        $(".main-container").load("artist/teddie/teddie.html");
    });
	
	//map
	$("#map").hide();
  	$("#showmap").on("click", function(){
    	$("#map").slideToggle("slow");
		return false;
  	});
	
});