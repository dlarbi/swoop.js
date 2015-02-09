define(["app/assets/transitions", "app/events"], function(Transitions, Events){
  var _uid = (+new Date()).toString(16) +
      (Math.random() * 100000000 | 0).toString(16) +
      Math.random(0,280000);

  var Model, _el, _model = null;
  var _transitionInType = 'default';

  function _initialize(el, model) {
    $.extend(this, Events);
    _el = el;
    Model = model;
    _model = Model.fetch();
    _bindToModel.call(this, Model, 'change', _update);
  }

  function _render() {
    Transitions[_transitionInType](_el, function() {
      _el.html('');
      _el.append('<div id="events_next" style="text-decoration:underline; cursor:pointer;">Next Month</div>');
      for(var i = 0, N = _model.length; i < N; i++) {
        _el.append('<div class="col-md-6" style="padding:40px;"><p>' + _model[i]["DATE"] + '</p><p>' + _model[i]["EVENT"] + '</p><div class="btn btn-primary">RSVP</div></div>');
      }
    });
  }

  function _bindToModel(model, eventName, callback) {
    this.listenTo(model, eventName, callback);
  }

  function _update(payload) {
    _model = payload;
    _render();
  }

  return {
    initialize : _initialize,
    render : _render,
    uid : _uid
  }
});
