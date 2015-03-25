$(function(){

  window.requestAnimationFrame = window.requestAnimationFrame
   || window.mozRequestAnimationFrame
   || window.webkitRequestAnimationFrame
   || window.msRequestAnimationFrame
   || function(f){setTimeout(f, 1000/60)}

  var elems = $(".parallax-image");

  if($('body').width() > 1024) {
    set_background_positions(elems);

    $(window).on('scroll', function(event) {
      window.requestAnimationFrame(function(){ set_background_positions(elems); });
    });
  } else {
    set_dimension(elems);
  }

  $(window).on('resize', function(event) {
    set_dimension(elems);
  });
});

function set_dimension(elems) {
  var height = 0;
  var container = null;

  $.each(elems, function(i, elem) {
    container = $(elem).parents('.parallax');
    height = $(elem).get(0).clientHeight / 1.3;

    if(height > 0) {
      container.css({
        'height': height,
      });
    }
  });
}

function set_background_positions(elems) {
  $.each(elems, function(i, elem) {
    set_background_position(elem);
  });
}

function set_background_position(elem) {
  $(elem).css({
    '-webkit-transform': calulate_position(elem),
    '-ms-transform': calulate_position(elem),
    '-o-transform': calulate_position(elem),
    '-moz-transform': calulate_position(elem),
    'transform': calulate_position(elem),
  });
}

function calulate_position(elem) {
  var speed = 0.5;
  var value = (caluclate_offset(elem) * speed) + "px";
  return 'translate3d(0px, '+ value +', 0px)'
}

function caluclate_offset(elem) {
  return window.pageYOffset - $(elem).offset().top;
}
