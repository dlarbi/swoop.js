define(["app/views/BaseView", "app/controllers/map_controller"], function(BaseView, Controller) {

  var Map_View = BaseView.extend({
    events : {
      'click #load-tweets' : 'loadTweetsOverlay',
      'mouseup #map-canvas' : 'refreshFromCurrentGeo'
    },

    map: null,

    render : function(DOMElement) {
      if(this.map === null) {
        var htmlOut = this.Templating.buildTemplate(
          '<div id="map-canvas" style="height:100%;"></div><div id="load-tweets" class="btn btn-primary">Load Tweets</div>',
          this.model.attributes
        );
        this.el.html(htmlOut).css('height', '100%');
        $(DOMElement).html(this.el).css('height', '100%');
        this.map = new google.maps.Map(document.getElementById('map-canvas'), this.model.attributes['mapPosition']);
      }
    },

    loadTweetsOverlay : function() {
        Controller.load_tweets_overlay(View.model);
        Controller.load_tweets_images(View.model);
    },

    refreshFromCurrentGeo : function() {
        Controller.refresh_tweet_map(View.model, View.map.getCenter());
    }

  });


  return Map_View;

});
