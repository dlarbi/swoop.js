define(["app/events", "app/views/BaseView"], function(Events, BaseView) {

  function Video_View() {
    BaseView.call(this);
  }

  Video_View.prototype = Object.create(BaseView.prototype);
  Video_View.prototype.render = function() {

    var htmlOut = this.Templating.buildTemplate(
      '<h2><% this.title %></h2><% this.body %><div style="width:200px; height:130px; border:1px solid #efefef; margin:0 auto;">VIDEO</div>',
      this.model.attributes
    );
    this.el.html(htmlOut)
    $('#main-content').html(this.el);   

  }
  Video_View.prototype.constructor = Video_View;
  var View = View || new Video_View();
  return View;

});
