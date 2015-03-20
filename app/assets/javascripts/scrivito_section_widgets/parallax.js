$(function(){

  window.requestAnimationFrame = window.requestAnimationFrame
   || window.mozRequestAnimationFrame
   || window.webkitRequestAnimationFrame
   || window.msRequestAnimationFrame
   || function(f){setTimeout(f, 1000/60)}

  var elems = [];

  if($('body').width() > 1024) {
    $(".parallax-image").each(function() {
      var elem = $(this);

      set_background_position(elem);
      set_dimension(elems);

      elems.push(elem);
    });

    $(window).on('scroll', function(event) {
      window.requestAnimationFrame(function(){ set_background_positions(elems) });
    });

    $(window).on('resize', function(event) {
      window.requestAnimationFrame(function(){ set_dimension(elems) });
    });
  }
});

function set_dimension(elems) {
  var height = 0;
  $.each(elems, function(i, elem) {
    height = $(elem).parents('.parallax').height();
    $(elem).css('height', height * 2);
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
  return window.pageYOffset - elem.offset().top;
}
