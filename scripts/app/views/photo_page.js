define(["app/events", "app/views/BaseView"], function(Events, BaseView) {

  function Photos_View() {
    BaseView.call(this);
  }
  Photos_View.prototype = Object.create(BaseView.prototype);

  Photos_View.prototype.render = function() {
    var htmlOut = this.Templating.buildTemplate(
      '<div class="container"><div id="photos-prev-page">Previous</div><div id="photos-next-page">Next</div>'+
        '<% for(var index in this) { %>'+
          '<div class="col-sm-2" style="padding:20px 0;"><img width="100%" src="<% this[index]["thumbnailUrl"] %>"/></div>'+
        '<% } %>'+
      '</div>',
      this.model.attributes
    );

    this.el.html(htmlOut);
    $('#main-content').html(this.el);
    this.bindEvents();
  }

  Photos_View.prototype.bindEvents = function() {
    var self = this;
    $('#photos-next-page').off('click').on('click', function() {
      var i = self.model.getCurrentAlbum();
      self.model.setCurrentAlbum(i+1);
    });
    $('#photos-prev-page').off('click').on('click', function() {
      var i = self.model.getCurrentAlbum();
      self.model.setCurrentAlbum(i-1);
    });
  }


  Photos_View.prototype.constructor = Photos_View;
  var View = View || new Photos_View();
  return View;

});
