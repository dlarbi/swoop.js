define(function() {

  function _load_page(path) {
    require(["app/models/page", "app/views/page"], function(Model, View) {
      Model.initialize(path);
      var model = Model.fetch();
      View.initialize($('#page'), model);
      View.render();
    });

  }

  function _load_events_widget() {
    require(["app/models/events", "app/views/events_widget"], function(Model, View) {
      Model.initialize('/api/widget');
      var model = Model.fetch();
      View.initialize($('#widget'), model);
      View.render();
    });
  }

  function _events_next() {
    require(["app/models/events"], function(Model) {
      Model.setState([
        {
          "EVENT" : 'Free cheeseburgers with Willy the Wimpy Walrus',
          "DATE" : '2013'
        },
        {
          "EVENT" : 'Vader vs Maul. XXX',
          "DATE" : '2013'
        }
      ])
    });
  }

  return {
    "default_action" : _load_page,
    "load_events_widget" : _load_events_widget,
    "events_next" : _events_next
  }

});
