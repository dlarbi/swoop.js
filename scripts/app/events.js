define(function(){

  var _listeners = [];

  function _on(eventName, callback) {
    console.log(this);
  }

  function _listenTo(model, eventName, callback) {
    _listeners.push({
      "listener" : this,
      "model" : model,
      "event" : eventName,
      "callback" : callback
    })
  }

  function _emitEvent(eventName, payload) {

    for(var i = 0, N = _listeners.length; i < N; i++) {
      if(_listeners[i]["model"].uid == this.uid) {
        _listeners[i].callback(payload);
      }
    }
    return {
      "event" : eventName,
      "object" : this
    }
  }

  return {
    on : _on,
    emit : _emitEvent,
    listenTo : _listenTo
  }

});
