(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'landing-page',
        templateUrl: 'app/landing-page.components.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/