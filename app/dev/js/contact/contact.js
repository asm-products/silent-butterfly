"use strict";
angular.module("silent-butterfly.contact",["ui.router.state"]).config(["$stateProvider",function($stateProvider){
  $stateProvider.state('contact', {
    url: '/contact',
    views: {
      "main": {
        controller: "ContactCtrl",
        templateUrl: "../contact/contact.tpl.html"
      }
    },
    data:{ pageTitle: 'Contact Us' }
  })
}]).controller("ContactCtrl", ["$scope", "$log", function($scope,$log){
  $log.info("in the ContactCtrl");
}])
;
