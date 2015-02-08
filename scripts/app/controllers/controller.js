define(function() {

  function _load_page(path) {
    require(["app/models/page", "app/views/page"], function(Model, View) {
      Model.initialize(path);
      View.initialize($('#page'), Model);
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
    "load_events_widget" : _load_events_widget
  }

});
