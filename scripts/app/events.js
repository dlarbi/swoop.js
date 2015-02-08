define(function(){

  var _listeners = [];

  function _on(eventName, callback) {
    console.log(this);
  }

  function _listenTo(eventName) {
    _listeners.push({
      "listener" : this,
      "event" : eventName
    })
  }

  function _emitEvent(eventName, payload) {
    console.log(this, payload)
    for(var i = 0, N = _listeners.length; i < N; i++) {
      _listeners["listener"].setState(payload);
      _listeners["listener"].render();
    }
    return {
      "event" : eventName,
      "object" : this
    }
  }

  return {
    on : _on,
    emit : _emitEvent,
    listenTo : listenTo
  }

});
