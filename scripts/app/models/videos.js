define(["app/events", "app/models/BaseModel"], function(Events, BaseModel) {

  function Video_Model() {
    BaseModel.call(this);
  }

  Video_Model.prototype = Object.create(BaseModel.prototype);
  Video_Model.prototype.initialize = function() {
    this.endpoint = 'http://jsonplaceholder.typicode.com/posts/8';
    $.extend(this, Events);
  }
  Video_Model.prototype.fetch = function() {
    var self = this;
    $.ajax({
      url: self.endpoint,
      success:function(data) {
        self.setState(data)
      }
    });
    return;
  }
  Video_Model.prototype.constructor = Video_Model;
  var Model = Model || new Video_Model();
  return Model;

});
