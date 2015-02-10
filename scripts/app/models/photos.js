define(["app/events", "app/models/BaseModel"], function(Events, BaseModel) {

  function Photos_Model() {
    BaseModel.call(this);
    this.currentAlbumId = 1;
  }

  Photos_Model.prototype = Object.create(BaseModel.prototype);
  Photos_Model.prototype.initialize = function() {
    this.endpoint = 'http://jsonplaceholder.typicode.com/photos/?albumId=';
    $.extend(this, Events);
  }
  Photos_Model.prototype.fetch = function() {
    var self = this;
    $.ajax({
      url: this.endpoint + self.currentAlbumId,
      success:function(data) {
        self.setState(data);
      }
    });
    return;
  }
  Photos_Model.prototype.albumNext = function() {
    this.currentAlbumId++;
    this.fetch();
  }
  Photos_Model.prototype.constructor = Photos_Model;
  var Model = Model || new Photos_Model();
  return Model;


});
