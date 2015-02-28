define(["app/events", "app/views/BaseView"], function(Events, BaseView) {

  var Video_View = BaseView.extend({

    render : function() {
      var htmlOut = this.Templating.buildTemplate(
        '<h2><% this.title %></h2><% this.body %><div style="width:200px; height:130px; border:1px solid #efefef; margin:0 auto;">VIDEO</div>',
        this.model.attributes
      );
      this.el.html(htmlOut)
      $('#main-content').html(this.el);
    }
  });

  var View = View || new Video_View();
  return View;

});
