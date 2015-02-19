define(["app/events", "../../helper/templating"], function(Events, Templating) {

  var BaseView = function() {
    this.uid = (+new Date()).toString(16) +
        (Math.random() * 100000000 | 0).toString(16) +
        Math.random(0,280000);

    this.model, this.el = null;
    this.tag = '<div></div>';
  };

  BaseView.prototype.nonUniqueId = Math.random(130,140);

  BaseView.prototype.initialize = function(model) {
    this.el = $(this.tag);
    this.el.attr('swoop-view', this.uid);
    this.model = model;
    this.model.fetch();
    $.extend(this, Events);
    this.listenTo.call(this, this.model, 'change', this.update);
    this.attachEvents(this.events)
  };

  BaseView.prototype.events = {};

  BaseView.prototype.render = function(DOMElement) {
    var htmlOut = this.Templating.buildTemplate(
      '<h1><% this.title %></h1><% this.body %>',
      this.model.attributes
    );
    this.el.html(htmlOut)
    $(DOMElement).html(this.el);

  };

  BaseView.prototype.update = function(payload) {
    this.model.attributes = payload;
    this.render();
  };

  BaseView.prototype.get = function(key) {
    return this.attributes[key];
  };

  BaseView.prototype.attachEvents = function(events) {
    var self = this;
    var event, element, eventArray;
    for(var key in events) {
      eventArray = key.split(' ');
      event = eventArray[0];
      element = eventArray[1];
      this.el.undelegate(element, event);
      this.el.on(event, element, self[events[key]]);
    }
  };

  BaseView.prototype.Templating = Templating;

  BaseView.extend = function(members){
    var self = this;
    function ExtendedView() {
      self.call(this);
    }
    ExtendedView.prototype = Object.create(self.prototype);
    for (var key in members) {
      if (members.hasOwnProperty(key)) {
        var obj = members[key];
        ExtendedView.prototype[key] = obj;
      }
    }
    ExtendedView.prototype.constructor = ExtendedView;
    return ExtendedView;
  };

  return BaseView;

});
