define(["app/events", "app/models/BaseModel"], function(Events, BaseModel) {

  var Page_Model = BaseModel.extend({
    initialize : function() {
      this.endpoint = 'http://jsonplaceholder.typicode.com/posts/2';
      $.extend(this, Events);
    }
  });

  var Model = Model || new Page_Model();
  return Model;

});
