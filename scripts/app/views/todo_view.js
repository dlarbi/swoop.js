define(["app/views/BaseView"], function(BaseView) {

  var Todo_View = BaseView.extend({

    events: {
      'click #add-todo': 'addTodo'
    },

    render : function(DOMElement) {
      var htmlOut = this.Templating.buildTemplate(
        '<div class="todo-widget">'+
          '<h1>Todo Widget</h1>'+
          '<ul id="todo-list">'+
            '<% for(var index in this) { %>'+
              '<% this[index]["TODO"] %>'+
            '<% } %>'+
          '</ul>'+
          '<input type="text" id="todo-input"/>'+
          '<div id="add-todo" style="padding:3px; background:#efefef;">Add Todo</div>'+
        '</div>',
        this.model.attributes
      );
      this.el.html(htmlOut)
      $(DOMElement).html(this.el);
    },

    addTodo: function() {
      View.model.pushAttribute(
        {
          "TODO" : '<li>' + $('#todo-input').val() + '</li>'
        }
      )
    }

  });

  var View = View || new Todo_View();
  return View;

});
