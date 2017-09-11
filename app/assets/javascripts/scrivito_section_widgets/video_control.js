(function($, App) {
  'use strict';

  $(function() {
    var videos = $(".video-tag");

    $.each(videos, function(index, elem) {
      var mp4 = $(elem).data('source-mp4');
      var ogg = $(elem).data('source-ogg');
      var webm = $(elem).data('source-webm');
      var image = $(elem).data('image');
      var height = $(elem).data('height');
      $(elem).html("");
      if($('body').width() < 1025) {
        $(elem).css({"background-image": "url("+ image +")", "height": height});
      } else {
        $(elem).append($('<video class="embed-responsive-item parallax-video" autoplay loop></video>').append("<source src='"+ mp4 +"' type='video/mp4'>").append("<source src='"+ webm +"' type='video/webm'>").append("<source src='"+ ogg +"' type='video/ogg'>"));
        $(elem).find('video').get(0).play();
      }
    });
  });

})(jQuery, this);
