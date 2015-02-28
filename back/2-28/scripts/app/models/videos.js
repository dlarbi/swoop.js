define(["app/events", "app/models/BaseModel"], function(Events, BaseModel) {

  var Video_Model = BaseModel.extend({
    initialize : function() {
      this.endpoint = 'http://jsonplaceholder.typicode.com/posts/8';
      $.extend(this, Events);
    }
  });

  var Model = Model || new Video_Model();
  return Model;
});
