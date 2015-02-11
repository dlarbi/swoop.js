define(["app/events", "app/views/BaseView"], function(Events, BaseView) {

  var Events_View = BaseView.extend({

    render : function() {
      var htmlOut = this.Templating.buildTemplate(
          '<div id="events_next" style="text-decoration:underline; cursor:pointer;">Next Month</div>'+
            '<% for(var index in this) { %>'+
              '<div class="col-md-6" style="padding:40px;"><p><% this[index]["DATE"] %></p>'+
                '<p><% this[index]["EVENT"] %></p>'+
                '<div class="btn btn-primary">RSVP</div>'+
              '</div>'+
            '<% } %>'+
          '</div>',
        this.model.attributes
      );
      this.el.html(htmlOut);
    }
  });

  var View = View || new Events_View();
  return View;

});
