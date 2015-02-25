(function($, App) {
  'use strict';

  $(function() {
    if($('body').width() > 1024) {
      var elems = $(".parallax");
      set_background_positions(elems);

      $(window).scroll(function(event) {
        set_background_positions(elems);
      });
    }
  });
})(jQuery, this);

function set_background_positions(elems) {
  $.each(elems, function(i, elem) {
    set_background_position(elem);
  });
}

function set_background_position(elem) {
  $(elem).css('background-position', calulate_position(elem));
}

function calulate_position(elem) {
  var speed = 0.5;
  return "50% " + (caluclate_offset(elem) * speed) + "px";
}

function caluclate_offset(elem) {
  return $(document).scrollTop() - $(elem).offset().top;
}
