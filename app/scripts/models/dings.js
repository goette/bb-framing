var DingsModel,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

DingsModel = (function(_super) {
  __extends(DingsModel, _super);

  function DingsModel() {
    return DingsModel.__super__.constructor.apply(this, arguments);
  }

  DingsModel.prototype.defaults = {
    val: 'Buddy'
  };

  return DingsModel;

})(Backbone.Model);
