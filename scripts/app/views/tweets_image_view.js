define(["app/views/BaseView"], function(BaseView) {

  var Tweets_Image_View = BaseView.extend({

    render : function(DOMElement) {
      var htmlOut = this.Templating.buildTemplate(
        '<div style="top:30%; left:15%; background:#fff; position:absolute; padding:40px; width:300px; margin-left:-200px; height:400px;" id="tweets-images-box">'+
          '<div style="width:100%;height:75%;overflow:auto; overflow-x:hidden; text-align:center;">'+
          '<% for(var index in this["tweets"]) { %>'+
            '<div style="padding:20px; border-bottom:1px solid #efefef;">'+
            '<img src="<% this["tweets"][index]["user"]["profile_image_url"] %>" width="75%";/>'+
            '</div>'+
          '<% } %>'+
          '</div>'+
        '</div>',
        this.model.attributes
      );
      this.el.html(htmlOut)
      $(DOMElement).append(this.el);
    }
    
  });

  var View = View || new Tweets_Image_View();
  return View;

});
