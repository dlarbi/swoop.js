define(function() {

  function _load_tweets_overlay(Model) {
    require(["app/views/map_tweets_view"], function(Map_Tweets_View) {
      View = new Map_Tweets_View();
      View.initialize(Model);
      View.render('#tweets-view');
    });
  }

  function _load_tweets_images(Model) {
    require(["app/views/tweets_image_view"], function(Tweets_Image_View) {
      View = new Tweets_Image_View();
      View.initialize(Model);
      View.render('#tweets-image-view');
    });
  }

  function _refresh_tweet_map(Model, currentMapCenter) {
    Model.setMapCenter(currentMapCenter);
    Model.fetch();
  }

  return {
    load_tweets_images : _load_tweets_images,
    load_tweets_overlay : _load_tweets_overlay,
    refresh_tweet_map : _refresh_tweet_map
  }

});
