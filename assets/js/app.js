
$(document).ready(function () {
  $('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
  }); //check for show, if true, hide else open so it is smoother
});

$(window).on('resize', function () {
  if (window.innerWidth > 768) {
    $('.navbar-collapse').collapse('hide');
    //if ($('.animated-icon2').collapse == 'open')
    //  $('.animated-icon2').toggleClass('open'); need to reset animated button from X
  }

})
