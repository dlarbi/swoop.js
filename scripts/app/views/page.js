define(["app/views/BaseView"], function(BaseView) {

  var Page_View = BaseView.extend({
    events : {
      'click #load-todo-widget-btn' : 'loadToDoWidget'
    },

    render : function(DOMElement) {
      var htmlOut = this.Templating.buildTemplate(
        '<h1><% this.title %></h1>'+
        '<p><% this.body %></p>'+
        '<span id="load-todo-widget-btn" class="btn btn-success">Load Todo Widget</span>'+
        '<div id="todo-widget-container" class="col-md-4 col-md-offset-4"></div>',
        this.model.attributes
      );
      this.el.html(htmlOut)
      $(DOMElement).html(this.el);
    },

    loadToDoWidget : function() {
      require(["app/controllers/controller"], function(Controller) {
        Controller.load_todo_widget();
      });
    }
  });

  var View = View || new Page_View();
  return View;

});
