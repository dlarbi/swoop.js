define(["app/events", "app/views/BaseView"], function(Events, BaseView) {

  function Page_View() {
    BaseView.call(this);
  }

  Page_View.prototype = Object.create(BaseView.prototype);
  Page_View.prototype.render = function() {
    var htmlOut = this.Templating.buildTemplate(
      '<h1><% this.title %></h1><% this.body %>',
      this.model.attributes
    );
    this.el.html(htmlOut)
    $('#main-content').html(this.el);
  }
  Page_View.prototype.constructor = Page_View;
  var View = View || new Page_View();
  return View;

});
