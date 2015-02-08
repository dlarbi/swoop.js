define(["app/events"], function(Events) {

  var _model = _model || {};
  var _url = null;

  function _initialize(url) {
    _url = url;
    $.extend(this, Events)
  }

  function _fetch() {
    if(_url == "#/home") {
      model = {
        "H1" : 'Swoop builds flat sites fast!',
        "BLURB" : 'This is a simple example of MVC in javascript.'
      }
    } else {
      model = {
        "H1" : 'And Swoop is small.',
        "BLURB" : 'Hopefully it wont grow much larger.'
      }
    }
    _model = model;
    this.emit('change', _model);
    return _model;
  }

  function _setState(model) {
    _model = model;
    this.emit('change', _model);
  }

  function _get(key) {
    return _model[key];
  }

  return {
    initialize : _initialize,
    fetch : _fetch,
    get : _get,
    setState : _setState

  }
});
