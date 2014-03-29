var Boot;

Boot = (function() {
  var $body, header;

  function Boot() {}

  window.Framing = new App;

  Framing.dingsModel = new DingsModel;

  Framing.dingsView = new DingsView;

  $body = $('body');

  header = new Header();

  header.render().el;

  new Router;

  Backbone.history.start();

  return Boot;

})();

$(function() {
  return new Boot();
});
