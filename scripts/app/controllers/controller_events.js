define(["app/models/events", "app/views/events_widget"], function(Model, View) {



  function _load_events_widget() {
    Model.initialize('/api/widget');
    View.initialize($('#widget'), Model);
    View.render();
    _bindEvents();
  }

  function _events_next() {  
    Model.setState([
      {
        "EVENT" : 'Free cheeseburgers with Willy the Wimpy Walrus',
        "DATE" : '2013'
      },
      {
        "EVENT" : 'Vader vs Maul. XXX',
        "DATE" : '2013'
      }
    ]);
  }

  function _bindEvents() {
    $('#events_next').click(function() {
      _events_next();
    });
  }

  return {
    "load_events_widget" : _load_events_widget
  }

});
