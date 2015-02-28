define(["app/events", "app/models/BaseModel"], function(Events, BaseModel) {

  /**
  * _mapPosition is only used for first initialization of map,
  * and then for internal tracking of long/lat to send to twitter API.
  * it should not be used outside of the View's render function, and privately in the model.
  */
  var _mapPosition = {
    center: { lat: -34.397, lng: 150.644},
    zoom: 8
  };

  var _regionSentiments = [];

  var Map_Model = BaseModel.extend({
    initialize : function() {
      this.endpoint = '';
      $.extend(this, Events);
      this.setState({
        mapPosition: _mapPosition,
        tweets : null
      })
    },

    fetch: function() {
      var self = this;
      $.ajax({
        type: 'get',
        url: '/api/test?lat='+_mapPosition.center.lat+'&long='+_mapPosition.center.lng,
        data: {},
        success: function(data) {
          self.setState({
            mapPosition : _mapPosition,
            tweets : data["statuses"]
          });
        }
      });
    },

    setMapCenter: function(data) {
      _mapPosition.center.lat = data['k'];
      _mapPosition.center.lng = data['D'];
    }

  });

  var Model = Model || new Map_Model();
  return Model;

});
