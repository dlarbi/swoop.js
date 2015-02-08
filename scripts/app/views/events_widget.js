define(["app/assets/transitions", "app/events"], function(Transitions, Events){

  var _el = null;
  var _transitionInType = 'default';
  var _model = null;

  function _initialize(el, model) {
    _el = el;
    _model = model;

  }

  function _render() {
    Transitions[_transitionInType](_el, function() {
      _el.html('');
      _el.append('<div class="swoop-button" data-swoop-action="events_next" style="text-decoration:underline; cursor:pointer;">Next Month</div>');
      for(var i = 0, N = _model.length; i < N; i++) {
        _el.append('<div class="col-md-3" style="padding:40px;"><p>' + _model[i]["DATE"] + '</p><p>' + _model[i]["EVENT"] + '</p><div class="btn btn-primary">RSVP</div></div>');
      }
    });
  }

  return {
    initialize : _initialize,
    render : _render
  }
});
