define(["app/events", "app/models/BaseModel"], function(Events, BaseModel) {

  var Todo_Model = BaseModel.extend({
    initialize : function() {
      this.endpoint = '';
      this.attributes = [];
      $.extend(this, Events);
    },
    fetch : function() {
      this.setState(this.attributes);
    }
  });

  var Model = Model || new Todo_Model();
  return Model;

});
