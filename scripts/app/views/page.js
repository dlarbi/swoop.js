define(["app/assets/transitions", "app/events"], function(Transitions, Events){
  var _uid = (+new Date()).toString(16) +
      (Math.random() * 100000000 | 0).toString(16) +
      Math.random(0,280000);

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
    this.listenTo.call(this, Model, 'change', _update);
  }

  function _render(transitions) {
    if(transitions != 'no-transitions') {
      Transitions[_transitionInType](_el, function() {
        _el.html('<h1>' + _model["title"] + '</h1><br>' + _model["body"]);
      });
    } else {
      _el.html('<h1>' + _model["title"] + '</h1><br>' + _model["body"]);
    }
    $('#main-content').html(_el);

  }

  function _bindToModel(model, eventName, callback) {
    this.listenTo(model, eventName, callback);
  }

  function _update(payload) {
    _model = payload;
    _render('no-transitions');
  }

  return {
    initialize : _initialize,
    render : _render,
    uid : _uid
  }
});
