(function($){
  var nunEnv = new nunjucks.Environment();
  nunEnv.addFilter('moment', function(string) {
    var dateTime = moment(string, "YYYY-MM-DD HH:mm");
    return dateTime.format('MMMM Do, YYYY - h:mm a');
  });

  var LifeStreamItemModel = Backbone.Model.extend({
    defaults: {
      title: "",
      content: "Content Default",
    }
  });

  var LifeStreamItemView = Backbone.View.extend({
    className: 'lifestream-item',
    template: function(templateName, data) {
      return nunEnv.render('../js/' + templateName, data);
    },
    render: function() {
      $(this.el).html(this.template("lifestreamItemTemplate.html", _.clone(this.model.attributes)));
      return this;
    }
  });

  var LifeStreamItems = Backbone.Collection.extend({
    model: LifeStreamItemModel
  });

  var LifeStreamApp = Backbone.View.extend({
    el: $('.article-content'),
    initialize: function() {
      var self = this;
      this.collection = new LifeStreamItems();

      $.getJSON('/data/lifestream.js', function(data) {
        for (var i = 0; i < data.length; i++) {
          var item = new LifeStreamItemModel(data[i]);

          self.collection.add(item);
        }
        self.render();
      });

      this.render();
    },
    render: function() {
      var self = this;
      this.collection.forEach(function(item) {
        var itemView = new LifeStreamItemView({
          model: item
        });

        self.$el.append(itemView.render().el);
      });
    }
  });

  var app = new LifeStreamApp();
})(jQuery);
