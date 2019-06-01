let i = 0;
let txt = 'Hi I Am Chakradhar'; 
let speed = 200; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
    setTimeout(erase, speed + 100);
  }
  
}
function erase(){
    if(i>=2){
        let temp=txt.substring(0,i);
        document.getElementById("typewriter").innerHTML =temp;
        i--;
        setTimeout(erase, speed);
    }else{
        i=2;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
      $('#mainNavbar').addClass('affix');
      $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
      $('#custom-nav').removeClass('affix');
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }   
});
$(function () {
  $(document).scroll(function () {
      var $nav = $("#mainNavbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height()+30);
  });
});