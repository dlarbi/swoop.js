define(["app/events", "app/views/BaseView"], function(Events, BaseView) {


  var Page_View = BaseView.extend({
    render : function() {
      var callee = arguments.callee;
      console.log(this)
      this.super()
      var htmlOut = this.Templating.buildTemplate(
        '<h1><% this.title %></h1>'+
        '<% this.body %>',
        this.model.attributes
      );
      this.el.html(htmlOut)
      $('#main-content').html(this.el);
    }

  });

  var View = View || new Page_View();
  return View;

});
