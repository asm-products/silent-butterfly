angular.module('templates-main', ['../contact/contact.tpl.html', '../features/features.tpl.html', '../home/home.tpl.html']);

angular.module("../contact/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../contact/contact.tpl.html",
    "<h1 class=cover-heading>Contact page.</h1><p class=lead>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p><p class=lead><a href=# class=\"btn btn-lg btn-default\">Learn more</a></p>");
}]);

angular.module("../features/features.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../features/features.tpl.html",
    "<h1 class=cover-heading>Features page.</h1><p class=lead>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p><p class=lead><a href=# class=\"btn btn-lg btn-default\">Learn more</a></p>");
}]);

angular.module("../home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../home/home.tpl.html",
    "<h1 class=cover-heading>Home page.</h1><p class=lead>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p><p class=lead><a href=# class=\"btn btn-lg btn-default\">Learn more</a></p>");
}]);
