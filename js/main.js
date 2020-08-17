 // Preloader

 function loader() {
  $(window).on('load', function () {
      $('#ctn-preloader').addClass('loaded');
      $("#loading").fadeOut(500);
      // once the preloader has finished, the scroll appears

      if ($('#ctn-preloader').hasClass('loaded')) {
          // once the preloader is gone, the entire preloader section is removed
          $('#preloader').delay(900).queue(function () {
              $(this).remove();
          });
      }
  });
}
loader();

// Preloader

$(window).scroll(function(){
  var navFixed = $(window).scrollTop();
  if(navFixed > 200){
    $(".header_sec").removeClass("pt-10 pb-20").addClass("fixed-top py-0");
  }else{
    $(".header_sec").removeClass("fixed-top py-0").addClass("pt-10 pb-20");
  }
});