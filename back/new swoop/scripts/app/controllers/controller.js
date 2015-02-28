define(function() {

  function _load_map() {
    require(["app/models/map_model", "app/views/map_view"], function(Model, View) {
      Model.initialize();
      View.initialize(Model);
      View.render('#map-container');
    });
  }

  return {
    load_map : _load_map
  }

});
