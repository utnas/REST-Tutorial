define("restclient/router", 
  ["ember","restclient/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function() {
      this.resource("posts", function() {});
    });

    __exports__["default"] = Router;
  });