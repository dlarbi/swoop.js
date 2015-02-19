define(function() {

  function _load_page() {
    require(["app/models/page", "app/views/page"], function(Model, View) {
      Model.initialize();
      View.initialize(Model);
      View.render('#main-content');
    });
  }

  function _load_video_page() {
    require(["app/models/videos", "app/views/video_page"], function(Model, View) {
      Model.initialize();
      View.initialize(Model);
      View.render('#main-content');
    });
  }

  function _load_photo_page() {
    require(["app/models/photos", "app/views/photo_page"], function(Model, View) {
      Model.initialize(); //albumId = 1 so we can page by increasing this value;
      View.initialize(Model);
      View.render('#main-content');
    });
  }

  function _load_events_widget() {
    require(["app/controllers/controller_events"], function(Controller_Events) {
      Controller_Events.load_events_widget();
    });
  }

  function _load_sandbox() {
    alert('Welcome to the sandbox.  Do what you will.');
  }

  function _load_todo_widget() {

  }

  return {
    default_action : _load_page,
    load_photo_page : _load_photo_page,
    load_video_page : _load_video_page,
    load_events_widget : _load_events_widget,
    load_sandbox: _load_sandbox,
    load_todo: _load_todo_widget
  }

});
