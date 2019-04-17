$(document).ready(function() {
  $(".compose").click(function(event) {
      $(".new-tweet").slideToggle(function() {
          $('textarea', this).focus();
      });
  });
});