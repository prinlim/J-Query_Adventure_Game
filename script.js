$(".part-Two").hide();
$(".part-Three").hide();
$(".part-Four").hide();
$(".partTwo").hide();
$(".death-One").hide();
$(".death-Two").hide();
$(".death-Three").hide();
$(".route-Two").hide();
$(".good-End").hide();

$(".re-One").click(function(){
    $(".death-One").fadeOut();
    $(".part-One").fadeIn("slow");
   $(".title").css("background-color","olive");
    $(".title").css("color","salmon");
    $(".title").text("A perfectly normal night!");
    $("body").css("background-color", "#366349");
});
$(".re-Two").click(function(){
    $(".death-Two").fadeOut();
    $(".part-One").fadeIn("slow");
   $(".title").css("background-color","olive");
    $(".title").css("color","salmon");
    $(".title").text("A perfectly normal night!");
    $("body").css("background-color", "#366349");
});$(".re-Three").click(function(){
    $(".death-Three").fadeOut();
    $(".part-One").fadeIn("slow");
   $(".title").css("background-color","olive");
    $(".title").css("color","salmon");
    $(".title").text("A perfectly normal night?");
    $("body").css("background-color", "#366349");
});
$(".re-Four").click(function(){
    $(".good-End").fadeOut();
    $(".part-One").fadeIn("slow");
   $(".title").css("background-color","olive");
    $(".title").css("color","salmon");
    $(".title").text("A perfectly normal night!");
    $("body").css("background-color", "#366349");
});

 

$(".yes-Go").click(function() {
	$(".part-One").fadeOut("slow");
    $(".part-Two").show();
    $(".title").text("SURVIVE");
    $(".title").css("background-color","red");
    $(".title").css("color","black");

});

$(".no-Stay").click(function() {
  $(".part-One").fadeOut("slow");
    $(".death-One").show();
    $("body").css("background-color","darkred");
    $(".title").text("GAME OVER!");
      $(".title").css("background-color","red");
    $(".title").css("color","black");

});
$(".running").click(function(){
    $(".part-Two").fadeOut("slow");
    $(".part-Three").show();
});
$(".log").dblclick(function(){
    $(".part-Three").fadeOut("slow");
    $(".part-Four").show();
});
$(".continue").click(function(){
    $(".part-Four").fadeOut("slow");
    $(".good-End").show();
    $(".title").text("You've survived!");
     $(".title").css("background-color","lightgreen");
    $(".title").css("color","white");
   }); 
$(".fight").click(function(){
     $(".part-Four").fadeOut("slow");
    $(".route-Two").show();
});
$(".knife").mouseenter(function(){
	$(".route-Two").fadeOut("slow");
	$(".death-Three").show();
    $("body").css("background-color","darkred");
    $(".title").text("GAME OVER!");
      $(".title").css("background-color","red");
    $(".title").css("color","black");
});
$(".hiding").click(function(){
    $(".part-Two").fadeOut("slow");
    $(".death-Two").show();
     $("body").css("background-color","darkred");
    $(".title").text("GAME OVER!");
      $(".title").css("background-color","red");
    $(".title").css("color","black");
});

    