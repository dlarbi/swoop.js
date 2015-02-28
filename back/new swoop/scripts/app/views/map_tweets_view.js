define(["app/views/BaseView"], function(BaseView) {

  var Map_Tweets_View = BaseView.extend({
    events : {
      'mouseup #tweet-refresh-btn' : 'refreshFromCurrentGeo'
    },

    render : function(DOMElement) {
      var htmlOut = this.Templating.buildTemplate(
        '<div style="top:30%; left:75%; background:#fff; position:absolute; padding:40px; width:300px; margin-left:-200px; height:400px;" id="tweet-refresh-box">'+
          '<div style="width:100%;height:75%;overflow:auto; overflow-x:hidden;">'+
          '<% for(var index in this["tweets"]) { %>'+
            '<div style="padding:20px; border-bottom:1px solid #efefef;">'+
            '<% this["tweets"][index]["text"] %>'+
            '</div>'+
          '<% } %>'+
          '</div>'+
        '<br>lat: <% this["mapPosition"]["center"]["lat"] %>'+' long: <%this["mapPosition"]["center"]["lng"] %><div class="btn btn-primary btn-block" id="tweet-refresh-btn">Refresh Tweets</div></div>',
        this.model.attributes
      );
      this.el.html(htmlOut)
      $(DOMElement).append(this.el);
    },

    refreshFromCurrentGeo : function() {
      require(["app/controllers/map_controller"], function(Controller) {
        Controller.refresh_tweet_map(View.model, View.map.getCenter());
      })
    }

  });

  var View = View || new Map_Tweets_View();
  return View;

});
