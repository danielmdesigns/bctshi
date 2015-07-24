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
        $(".main-container").load("shop.html");
    });
    $("#faqs").click(function () {
        $(".main-container").load("faqs.html");
    });
	$("#richie").click(function () {
        $(".main-container").load("artist/richie.html");
    });
    $("#shay").click(function () {
        $(".main-container").load("artist/shay.html");
    });
    $("#jose").click(function () {
        $(".main-container").load("artist/jose.html");
    });
    $("#marie").click(function () {
        $(".main-container").load("artist/marie.html");
    });
	$("#simon").click(function () {
        $(".main-container").load("artist/simon.html");
    });
	$("#jaimie").click(function () {
        $(".main-container").load("artist/jaimie.html");
    });
	$("#andrew").click(function () {
        $(".main-container").load("artist/andrew.html");
    });
	$("#teddie").click(function () {
        $(".main-container").load("artist/teddie.html");
    });
	
	//map
	$("#map").hide();
  	$("#showmap").on("click", function(){
    	$("#map").slideToggle("slow");
		return false;
  	});
	
	//google maps
	$('address').each(function () {
	  var link = "<a class='maps' href='http://maps.google.com/maps?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
	  $(this).html(link);
	});
	
});