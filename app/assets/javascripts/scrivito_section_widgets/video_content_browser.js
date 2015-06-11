(function($, App) {
  'use strict';

  scrivito.on('content', function() {
    if(scrivito.in_editable_view()) {
      scrivito.register_default_obj_class_for_content_type({
        'video/mp4': 'Video',
        'video/ogg': 'Video',
        'video/webm': 'Video'
      });
    }
  });
})(jQuery, this);
