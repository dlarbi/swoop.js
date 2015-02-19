define(["app/events", "app/views/BaseView"], function(Events, BaseView) {

  var Photos_View = BaseView.extend({

    events: {
      'click #photos-next-page' : 'nextAlbum',
      'click #photos-prev-page' : 'previousAlbum'
    },

    render : function(DOMElement) {
      var htmlOut = this.Templating.buildTemplate(
          '<div class="container"><div id="photos-prev-page">Previous</div><div id="photos-next-page">Next</div>'+
            '<% for(var index in this) { %>'+
            '<div class="col-sm-2" style="padding:20px 0;"><img width="100%" src="<% this[index]["thumbnailUrl"] %>"/></div>'+
            '<% } %>'+
          '</div>',
        this.model.attributes
      );
      this.el.html(htmlOut);
      $(DOMElement).html(this.el);
    },

    previousAlbum: function() {
      var i = View.model.getCurrentAlbum();
      View.model.setCurrentAlbum(i-1);
    },

    nextAlbum: function() {
      var i = View.model.getCurrentAlbum();
      View.model.setCurrentAlbum(i+1);
    }
  });


  var View = View || new Photos_View();
  return View;

});
