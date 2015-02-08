define(["app/assets/transitions", "app/events"], function(Transitions, Events){

  var Model;
  var _el = null;
  var _transitionInType = 'default';
  // _model is just its data
  var _model = null;

  function _initialize(el, model) {
    $.extend(this, Events);
    _el = el;
    Model = model;
    _model = Model.fetch();
    _bindToModel.call(this, Model, 'change', _update);
  }

  function _render() {
    Transitions[_transitionInType](_el, function() {
      _el.html('<h1>' + _model["H1"] + '</h1><br>' + _model["BLURB"]);
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
    render : _render
  }
});
