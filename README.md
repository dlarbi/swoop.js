# swoop.js
Swoop is a small MVC framework that helps build single page applications.  Uses require.js for modularity and jQuery for some DOM interactions.

Swoop has event-driven one way Model-View data bindings, simplified event system for your views, core classes for Models, Views, Events, Router, Templating.  This repo is a sample app built with Swoop, that allows users to drag around a google map, and see their views bound to geo-located twitter data.

####Building our twitter-google maps mashup application with Swoop

There are a few key tools and concepts to follow in Swoop.  Starting with routes is a reasonable way to start seeing how the sample app in this repo ticks.

###Routes
  
You'll find the Routes module in /scripts/app/routes.js.  In our app, we're only going to use one route; the one for the main screen.

    var _routes = {
      "#/home" : 'load_map',
    }

Your apps URL routes all exist within the _routes object in routes.js, which is a regular javascript object with keys being routes in the format '#/route/route/route', and function names as values.  These function names are to be held in your main Controller module; giving us a perfect segue into our equally simple controller system.

###Controllers

Any routes you setup in your _routes object, are going to be directed to your main Controller module located in /scripts/app/controllers/controller.js.

Our controller.js looks like this:  A _load_map() method to load up the Model and View we want. Swoop uses AMD with require.js to pull in dependencies where they are needed.

    define(function() {

      function _load_map() {
        require(["app/models/map_model", "app/views/map_view"], function(Model, Map_View) {
          View = new Map_View();
          Model.initialize();
          View.initialize(Model);
          View.render('#map-container');
        });
      }
  
      return {
        load_map : _load_map
      }

    });

Notice the pattern of:
      View = new Map_View();
      Model.initialize();
      View.initialize(Model);
      View.render(DOMElement);

###BaseView

Things get a bit more fun here.   In typical MVC fashion our controller has loaded a view, in this case map_view.  Like all views in Swoop, find it in /scripts/app/models/map_view.js, alongside BaseView.js.  First, notice how our map_view extends BaseView.

    var Map_View = BaseView.extend({
          
    });

Swoop's system for extending Views and Models, works pretty intuitively (think backbone inspired).  Any methods you write in the object passed to extend, will overwrite its super's.

#####Events

Adding events to your View is also very backbone inspired: These do what you expect they would.  Clicky #load-tweets -> loady loadTweetsOverlay().  

    var Map_View = BaseView.extend({
      events : {
        'click #load-tweets' : 'loadTweetsOverlay',
        'mouseup #map-canvas' : 'refreshFromCurrentGeo'
      },
    });

If your events are going to be updating a model (like you will see the ones above do), Swoop wants you to do that through a controller.  Notice in our sample app, our View/Model combo was initially loaded through the main controller, but once our view is loaded, its actions are taken care of by its own special controller, map_controller.

    loadTweetsOverlay : function() {
      require(["app/controllers/map_controller"], function(Controller) {
        Controller.load_tweets_overlay(View.model);
        Controller.load_tweets_images(View.model);
      });
    },
      
    refreshFromCurrentGeo : function() {
      require(["app/controllers/map_controller"], function(Controller) {
        Controller.refresh_tweet_map(View.model, View.map.getCenter());
      })
    }

#####Templating/Your view's render() method
readme to be continued for now... Download the sample app, and see how people tweet around the world.  Thanks for looking, I will update regularly so check back :)
