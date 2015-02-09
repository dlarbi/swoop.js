define(["app/events"], function(Events) {

  var _uid = (+new Date()).toString(16) +
      (Math.random() * 100000000 | 0).toString(16) +
      Math.random(0,280000);

  var _model = _model || {};
  var _url = null;
  var _endpoint = null;

  function _initialize(endpoint) {
    _endpoint = 'http://jsonplaceholder.typicode.com/photos/?albumId=' + endpoint;
    $.extend(this, Events);
  }

  function _fetch() {
    var self = this;

    $.ajax({
      url: _endpoint,
      success:function(data) {
        self.setState(data);
      }
    });

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
    model : _model,
    fetch : _fetch,
    get : _get,
    setState : _setState,
    uid : _uid

  }
});
