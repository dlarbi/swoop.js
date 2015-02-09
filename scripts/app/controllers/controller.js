define(function() {

  function _load_page() {
    require(["app/models/page", "app/views/page"], function(Model, View) {
      Model.initialize('1');
      View.initialize($('<div id="page"></div>'), Model);
      View.render();
    });
  }

  function _load_video_page() {
    require(["app/models/videos", "app/views/video_page"], function(Model, View) {
      Model.initialize('4');
      View.initialize($('<div id="page"></div>'), Model);
      View.render();
    });
  }

  function _load_photo_page() {    
    require(["app/models/photos", "app/views/photo_page"], function(Model, View) {
      Model.initialize('1'); //albumId = 1 so we can page by increasing this value;
      View.initialize($('<div id="page"></div>'), Model);
      View.render();
    });
  }

  function _load_events_widget() {
    require(["app/controllers/controller_events"], function(Controller_Events) {
      Controller_Events.load_events_widget();
    });
  }

  return {
    "default_action" : _load_page,
    "load_photo_page" : _load_photo_page,
    "load_video_page" : _load_video_page,
    "load_events_widget" : _load_events_widget
  }

});
