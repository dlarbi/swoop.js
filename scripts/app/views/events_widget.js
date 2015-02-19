define(["app/events", "app/views/BaseView"], function(Events, BaseView) {

  var Events_View = BaseView.extend({

    events: {
      'click #events_next': 'eventsNext',
      'click .rsvp-button': 'rsvpModal'
    },

    render : function(DOMElement) {
      var htmlOut = this.Templating.buildTemplate(
          '<div id="events_next" style="text-decoration:underline; cursor:pointer;">Next Month</div>'+
            '<% for(var index in this) { %>'+
              '<div class="col-md-6" style="padding:40px;"><p><% this[index]["DATE"] %></p>'+
                '<p><% this[index]["EVENT"] %></p>'+
                '<div class="btn btn-primary rsvp-button" data-modal="<% this[index]["EVENT"] %>">RSVP</div>'+
              '</div>'+
            '<% } %>'+
          '</div>',
        this.model.attributes
      );
      this.el.html(htmlOut);
      $(DOMElement).html(this.el);
    },

    eventsNext : function() {
      View.model.eventsNext();
    },

    rsvpModal : function() {
      alert($(this).attr('data-modal'))
    }

  });

  var View = View || new Events_View();
  return View;

});
