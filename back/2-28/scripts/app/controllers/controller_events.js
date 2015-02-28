define(["app/models/events", "app/views/events_widget"], function(Model, View) {

  function _load_events_widget() {
    Model.initialize('/api/widget');
    View.initialize(Model);
    View.render('#widget');
  }

 // function _bindEvents() {
  //  $('#events_next').click(function() {
  //    _events_next();
  //  });
 // }

  return {
    "load_events_widget" : _load_events_widget
  }

});
