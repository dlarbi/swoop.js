define(function() {
  var _el = null;
  function _default(el, callback) {
    _el = el;
    _el.fadeOut(0, callback);
    _el.fadeIn(500);
  }
  function _swipeX(el, callback) {
    _el = el;
    _el.animate(function() {
      left: -_el.width();
    })
  }
  return {
    "default" : _default,
    "swipeX" : _swipeX
  }
});
