define(["app/events", "app/models/BaseModel"], function(Events, BaseModel) {

  function Page_Model() {
    BaseModel.call(this);
  }

  Page_Model.prototype = Object.create(BaseModel.prototype);
  Page_Model.prototype.initialize = function() {
    this.endpoint = 'http://jsonplaceholder.typicode.com/posts/2';
    $.extend(this, Events);
  }
  Page_Model.prototype.constructor = Page_Model;
  var Model = Model || new Page_Model();
  return Model;

});
