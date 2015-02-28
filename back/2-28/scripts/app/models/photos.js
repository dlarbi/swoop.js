define(["app/events", "app/models/BaseModel"], function(Events, BaseModel) {

// _thisIsAlways a private variable
  var _currentAlbumId = 1;
  var Photos_Model = BaseModel.extend({

    initialize : function() {
      this.endpoint = 'http://jsonplaceholder.typicode.com/photos/?albumId=';
      $.extend(this, Events);
    },

    fetch : function() {
      var self = this;
      $.ajax({
        url: this.endpoint + _currentAlbumId,
        success:function(data) {
          self.setState(data);
        }
      });
      return false;
    },

    getCurrentAlbum : function() {
      return _currentAlbumId;
    },

    setCurrentAlbum : function(i) {
      _currentAlbumId = i;
      this.fetch();
    }

  });

  var Model = Model || new Photos_Model();
  return Model;

});
