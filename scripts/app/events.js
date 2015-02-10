define(function(){

  var _listeners = [];

  function _on(eventName, callback) {
    console.log(this);
  }

  function _listenTo(model, eventName, callback) {
    var alreadyListening = 0;
    for(var i = 0, N = _listeners.length; i < N; i++) {
      if(_listeners[i]["listener"].uid == this.uid) alreadyListening = 1;
    }
    if(alreadyListening == 0) {
      _listeners.push({
        "listener" : this,
        "model" : model,
        "event" : eventName,
        "callback" : callback
      })
    }
  }

  function _emitEvent(eventName, payload) {
    for(var i = 0, N = _listeners.length; i < N; i++) {
      if(_listeners[i]["model"].uid == this.uid && _listeners[i]["event"] == eventName) {
        _listeners[i].callback.call(_listeners[i]["listener"], payload);
      }
    }
  }

  return {
    on : _on,
    emit : _emitEvent,
    listenTo : _listenTo
  }

});
