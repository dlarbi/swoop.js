define(["app/events", "app/models/BaseModel"], function(Events, BaseModel) {

  var Events_Model = BaseModel.extend({
    fetch : function() {
      this.setState([
        {
          "EVENT" : 'Odin the destroyer of worlds, on Ice.',
          "DATE" : '2013'
        },
        {
          "EVENT" : 'Free cheeseburgers with Willy the Wimpy Walrus',
          "DATE" : '2013'
        },
        {
          "EVENT" : 'Vader vs Maul. XXX',
          "DATE" : '2013'
        },
        {
          "EVENT" : 'The Statue of Liberty vs Godzilla: round 2',
          "DATE" : '2013'
        },
        {
          "EVENT" : 'The Statue of Liberty vs Godzilla: round 2',
          "DATE" : '2014'
        },
        {
          "EVENT" : 'The Statue of Liberty vs Godzilla: round 2',
          "DATE" : '2014'
        },
        {
          "EVENT" : 'The Statue of Liberty vs Godzilla: round 2',
          "DATE" : '2014'
        },
        {
          "EVENT" : 'The Statue of Liberty vs Godzilla: round 2',
          "DATE" : '2014'
        }
      ]);
      return false;
    },

    eventsNext : function() {
      this.setState([
        {
          "EVENT" : 'Free cheeseburgers with Willy the Wimpy Walrus',
          "DATE" : '2013'
        },
        {
          "EVENT" : 'Vader vs Maul. XXX',
          "DATE" : '2013'
        }
      ]);
    }

  });

  var Model = Model || new Events_Model();
  return Model;

});
