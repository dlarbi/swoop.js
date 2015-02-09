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
    _bindToModel.call(this, Model, 'change', _update);
    _model = Model.fetch();
  }

  function _render() {

    Transitions[_transitionInType](_el, function() {
      _el.html('<div class="container"></div>')
      for(var i = 0, N = _model.length; i < N; i++) {
        _el.find('.container').append('<div class="col-md-2" style="padding:20px;"><img src="' + _model[i]["thumbnailUrl"] + '"/img></div>');
      }
    });
    $('#main-content').html(_el);
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