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
      _el.html('<h1>' + _model["H1"] + '</h1><br>' + _model["BLURB"]);
    });
  }

  return {
    initialize : _initialize,
    render : _render
  }
});
