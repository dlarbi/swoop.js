define(["app/events"], function(Events) {

  var BaseModel = function() {
    this.uid = (+new Date()).toString(16) +
        (Math.random() * 100000000 | 0).toString(16) +
        Math.random(0,280000);

    this.attributes = {};
    this.endpoint = null;
  };

  BaseModel.prototype.fetch = function() {
    var self = this;
    $.ajax({
      url: this.endpoint,
      success:function(data) {
        self.setState(data)
      }
    });
    return;
  };

  BaseModel.prototype.nonUniqueId = Math.random(130,140);

  BaseModel.prototype.initialize = function(endpoint) {
    this.endpoint = 'http://jsonplaceholder.typicode.com/' + endpoint;
    $.extend(this, Events);
  };

  BaseModel.prototype.setState = function(newAttributes) {
    this.attributes = newAttributes;
    this.emit('change', this.attributes);
  };

  BaseModel.prototype.get = function(key) {
    return this.attributes[key];
  };

  BaseModel.extend = function(members){
    var self = this;
    function ExtendedModel() {
      self.call(this);
    }
    ExtendedModel.prototype = Object.create(self.prototype);
    for (var key in members) {
      if (members.hasOwnProperty(key)) {
        var obj = members[key];
         ExtendedModel.prototype[key] = obj;
      }
    }
    ExtendedModel.prototype.constructor = ExtendedModel;
    return ExtendedModel;
  };

  return BaseModel;

});
