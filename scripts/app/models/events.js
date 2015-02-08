define(["app/events"], function(Events) {
  var _uid = (+new Date()).toString(16) +
      (Math.random() * 100000000 | 0).toString(16) +
      Math.random(0,280000);
  var _model = _model || {};
  var _url = null;

  function _initialize(url) {
    _url = url;
    $.extend(this, Events)
  }

  function _fetch() {
    model = [
      {
        "EVENT" : 'Odin the destroyer of worlds, on Ice.',
        "DATE" : '2013'
      },
      {
        "EVENT" : 'Free cheeseburgers with Willy the Wimpy Walrus',
        "DATE" : '2013'
      },
      {
        "EVENT" : 'Vader vs Maul. XXX',
        "DATE" : '2013'
      },
      {
        "EVENT" : 'The Statue of Liberty vs Godzilla: round 2',
        "DATE" : '2013'
      },
      {
        "EVENT" : 'The Statue of Liberty vs Godzilla: round 2',
        "DATE" : '2014'
      },
      {
        "EVENT" : 'The Statue of Liberty vs Godzilla: round 2',
        "DATE" : '2014'
      },
      {
        "EVENT" : 'The Statue of Liberty vs Godzilla: round 2',
        "DATE" : '2014'
      },
      {
        "EVENT" : 'The Statue of Liberty vs Godzilla: round 2',
        "DATE" : '2014'
      }
    ]
    _model = model;
    return _model;
  }

  function _get(key) {
    return _model[key];
  }

  function _setState(model) {
    _model = model;
    this.emit('change', _model);
  }

  return {
    initialize : _initialize,
    fetch : _fetch,
    model : _model,
    get : _get,
    setState : _setState,
    uid : _uid
  }

});
