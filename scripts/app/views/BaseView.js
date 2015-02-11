define(["app/events", "../../helper/templating"], function(Events, Templating) {

  var BaseView = function() {
    this.uid = (+new Date()).toString(16) +
        (Math.random() * 100000000 | 0).toString(16) +
        Math.random(0,280000);

    this.model, this.modelState, this.el = null;
  };

  BaseView.prototype.nonUniqueId = Math.random(130,140);
  BaseView.prototype.initialize = function(el, model) {

    //Steal the element's wrapper if it already exists in the DOM
    var $el = $('#'+el.attr('id'));
    $el.length ? this.el = $el : this.el = el;

    this.model = model;
    this.model.fetch();
    $.extend(this, Events);
    this.listenTo.call(this, this.model, 'change', this.update);
  }
  BaseView.prototype.render = function() {
    var htmlOut = this.Templating.buildTemplate(
      '<h1><% this.title %></h1><% this.body %>',
      this.model.attributes
    );
    this.el.html(htmlOut)
    $('#main-content').html(this.el);
  }
  BaseView.prototype.update = function(payload) {
    this.model.attributes = payload;
    this.render();
  }
  BaseView.prototype.get = function(key) {
    return this.attributes[key];
  }
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
    ExtendedView.prototype.super = function() {
      console.log(self.prototype.render.call(this))
    }
    ExtendedView.prototype.constructor = ExtendedView;
    return ExtendedView;
  };

  return BaseView;

});
