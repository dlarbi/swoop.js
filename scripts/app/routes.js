define(["app/controllers/controller"], function(Controller) {

  var _routes = {
    "#/home" : 'default_action',
    "#/about" : 'default_action',
    "#/api_docs" : 'default_action'
  }

  var _currentPath = window.location.hash;

  function _initialize() {
    _navigate(_currentPath);
    setInterval(_hashCheck, 100);
  }

  function _navigate(url) {
    _currentPath = url;
    var fn = _routes[_currentPath];
    Controller[fn](_currentPath);
  }

  function _hashCheck() {
     if (window.location.hash != _currentPath){
       _currentPath = window.location.hash;
       _navigate(_currentPath);
     }
   }

  _initialize();
  return {
    navigate : _navigate
  }

})
