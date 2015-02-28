requirejs.config({
  baseUrl: 'scripts',
  paths: {
    helper: 'helper',
    app: 'app'
  }
});
require(["app/routes", "app/controllers/controller"], function(Routes, Controller) {

  $('body').on('click', '.swoop-button', function() {
    var fn = $(this).attr('data-swoop-action');
    Controller[fn]();
  });

});
