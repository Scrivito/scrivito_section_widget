$(function(){

  window.requestAnimationFrame = window.requestAnimationFrame
   || window.mozRequestAnimationFrame
   || window.webkitRequestAnimationFrame
   || window.msRequestAnimationFrame
   || function(f){setTimeout(f, 1000/60)}

  scrivito.on('content', function() {
    var images = $(".parallax-image-fast, .parallax-image-medium, .parallax-image-slow");

    if($('body').width() > 1024 && images.length > 0) {
      set_background_positions(images);

      $(window).on('scroll', function(event) {
        window.requestAnimationFrame(function(){ set_background_positions(images); });
      });
    } else {
      set_dimension(images);

      $(window).on('resize', function(event) {
        set_dimension(images);
      });
    }

  });
});

function set_dimension(images) {
  var height = 0;
  var container = null;

  $.each(images, function(i, image) {
    container = $(image).parents('.parallax');
    height = $(image).get(0).clientHeight / 1.3;

    if(height > 0) {
      container.css({
        'height': height,
      });
    }
  });
}

function set_background_positions(images) {
  $.each(images, function(i, image) {
    set_background_position(image);
  });
}

function set_background_position(image) {
  var value = $(image).data('parallax-speed');
  var data = calulate_position(image, value);
  $(image).css({
    '-webkit-transform': data,
    '-ms-transform': data,
    '-o-transform': data,
    '-moz-transform': data,
    'transform': data,
  });
}

function calulate_position(image, value) {
  var speed = data_to_speed(value);
  var value = (caluclate_offset(image) * speed) + "px";
  return 'translate3d(0px, '+ value +', 0px)'
}

function caluclate_offset(image) {
  return window.pageYOffset - $(image).offset().top;
}

function data_to_speed(value) {
  if(value == "fast") return 0.6;
  if(value == "slow") return 0.1;
  return 0.3;
}