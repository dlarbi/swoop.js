define(function() {

  function _load_page() {
    require(["app/models/page", "app/views/page"], function(Model, View) {
      Model.initialize();
      View.initialize($('<div id="page"></div>'), Model);
      View.render();
    });
  }

  function _load_video_page() {
    require(["app/models/videos", "app/views/video_page"], function(Model, View) {
      Model.initialize();
      View.initialize($('<div id="page"></div>'), Model);
      View.render();
    });
  }

  function _load_photo_page() {
    require(["app/models/photos", "app/views/photo_page"], function(Model, View) {
      Model.initialize(); //albumId = 1 so we can page by increasing this value;
      View.initialize($('<div id="page"></div>'), Model);
      View.render();
    });
  }

  function _load_events_widget() {
    require(["app/controllers/controller_events"], function(Controller_Events) {
      Controller_Events.load_events_widget();
    });
  }

  function _load_sandbox() {
    require(["app/models/BaseModel"], function(BaseModel) {

      var model = new BaseModel();
      model.initialize('posts/1')
      var model2 = new BaseModel();
      model2.initialize('posts/2')
      console.log(model, model2)
    });
  }

  return {
    default_action : _load_page,
    load_photo_page : _load_photo_page,
    load_video_page : _load_video_page,
    load_events_widget : _load_events_widget,
    load_sandbox: _load_sandbox
  }

});
