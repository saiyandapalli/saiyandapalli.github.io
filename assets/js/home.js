$(document).ready(function() {

  // jQuery Function Number 1

//all pages
$("#scrollerhome").click(function() {
    $('html,body').animate({
        scrollTop: $(".secondscreenhome").offset().top},
        'slow');
  });
  $("#scroller1").click(function() {
      $('html,body').animate({
          scrollTop: $(".secondscreen").offset().top},
          'slow');
  });

  $(".homemain").click(function() {
      $('html,body').animate({
          scrollTop: $(".firstscreen").offset().top},
          'slow');
  });

//career
$("#scroller2").click(function() {
    $('html,body').animate({
        scrollTop: $(".thirdscreen").offset().top},
        'slow');
});

$("#scroller3").click(function() {
    $('html,body').animate({
        scrollTop: $(".fourthscreen").offset().top},
        'slow');
});

//about

$("#scrollera1").click(function() {
    $('html,body').animate({
        scrollTop: $(".secondscreena1").offset().top},
        'slow');
  });

//contact
  $("#scrollerc1").click(function() {
      $('html,body').animate({
          scrollTop: $(".secondscreenc1").offset().top},
          'slow');
    });

//teaching
      $("#scrollert1").click(function() {
          $('html,body').animate({
              scrollTop: $(".secondscreent1").offset().top},
              'slow');
        });
//design
  $("#scrollerd1").click(function() {
                  $('html,body').animate({
                      scrollTop: $(".secondscreend1").offset().top},
                      'slow');
                });



    // jQuery Function Number 2

  $(".button").hover(
    function() {
    // $(".image").stop()
    $(this).css("color", "#fff");
    $(this).css("background", "#000");
  },
  function() {
  $(this).css("color", "#000");
  $(this).css("background", "transparent");
  });

  $(".resume").hover(
    function() {
    // $(".image").stop()
    $(this).css("color", "#000");
    $(this).css("background", "#fff");
  },
  function() {
  $(this).css("color", "#fff");
  $(this).css("background", "transparent");
  });


  $(".homemain").hover(
    function(){
      $(".homeimage").stop().fadeIn();
      // $(".homeimage").fadeIn("slow");
      // $(".homeimage").fadeIn(3000);
    },
    function(){
      $(".homeimage").fadeOut("fast");
      // $(".homeimage").fadeOut("slow");
      // $(".homeimage").fadeOut(3000);
  });

  $(".career").hover(
    function(){
      $(".careerimage").stop().fadeIn();
      // $(".careerimage").fadeIn("slow");
      // $(".careerimage").fadeIn(3000);
    },
    function(){
      $(".careerimage").fadeOut("fast");
      // $(".careerimage").fadeOut("slow");
      // $(".careerimage").fadeOut(3000);
  });

  $(".design").hover(
    function(){
      $(".designimage").stop().fadeIn();
      // $(".designimage").fadeIn("slow");
      // $(".designimage").fadeIn(3000);
    },
    function(){
      $(".designimage").fadeOut("fast");
      // $(".designimage").fadeOut("slow");
      // $(".designimage").fadeOut(3000);
  });

  $(".teaching").hover(
    function(){
      $(".teachingimage").stop().fadeIn();
      // $(".teachingimage").fadeIn("slow");
      // $(".teachingimage").fadeIn(3000);
    },
    function(){
      $(".teachingimage").fadeOut("fast");
      // $(".teachingimage").fadeOut("slow");
      // $(".teachingimage").fadeOut(3000);
  });

  $(".about").hover(
    function(){
      $(".aboutimage").stop().fadeIn();
      // $(".aboutimage").fadeIn("slow");
      // $(".aboutimage").fadeIn(3000);
    },
    function(){
      $(".aboutimage").fadeOut("fast");
      // $(".aboutimage").fadeOut("slow");
      // $(".aboutimage").fadeOut(3000);
  });

  $(".contact").hover(
    function(){
      $(".contactimage").stop().fadeIn();
      // $(".contactimage").fadeIn("slow");
      // $(".contactimage").fadeIn(3000);
    },
    function(){
      $(".contactimage").fadeOut("fast");
  });

// The below function was learned from https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        $(panel).toggle(300);
    });
}



});
