define(["app/views/BaseView"], function(BaseView) {

  var Page_View = BaseView.extend({
    events : {
      'click #btn' : 'loadToDoWidget'
    },

    render : function(DOMElement) {
      var htmlOut = this.Templating.buildTemplate(
        '<h1><% this.title %></h1>'+
        '<% this.body %>'+
        '<div id="btn">BUTTON</div>',
        this.model.attributes
      );
      this.el.html(htmlOut)
      $(DOMElement).html(this.el);
    },

    loadToDoWidget : function() {
      console.log('ToDo Widget Loaded')
    }
  });

  var View = View || new Page_View();
  return View;

});
