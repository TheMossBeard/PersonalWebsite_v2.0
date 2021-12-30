
$(document).ready(function () {
  $('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
  });
});

var btns = $("#nav-section navbar nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click",
    function () {
      var current = document
        .getElementsByClassName("active");

      current[0].className = current[0]
        .className.replace(" active", "");

      this.className += " active";
    });
}