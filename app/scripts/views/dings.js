var DingsView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

DingsView = (function(_super) {
  __extends(DingsView, _super);

  function DingsView() {
    return DingsView.__super__.constructor.apply(this, arguments);
  }

  DingsView.prototype.el = '#test';

  DingsView.prototype.model = new DingsModel;

  DingsView.prototype.template = JST['dings'];

  DingsView.prototype.initialize = function() {
    return this.listenTo(this.model, 'change', this.render);
  };

  DingsView.prototype.render = function() {
    return this.$el.html(this.template(this.model.toJSON()));
  };

  DingsView.prototype.events = {
    'click p': 'changeVal'
  };

  DingsView.prototype.changeVal = function() {
    return this.model.set('val', 'Friend');
  };

  return DingsView;

})(Backbone.View);
