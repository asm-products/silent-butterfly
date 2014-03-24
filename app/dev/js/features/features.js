"use strict";
angular.module("silent-butterfly.features",["ui.router.state"]).config(["$stateProvider",function($stateProvider){
  $stateProvider.state('features', {
    url: '/features',
    views: {
      "main": {
        controller: "FeaturesCtrl",
        templateUrl: "../features/features.tpl.html"
      }
    },
    data:{ pageTitle: 'Features' }
  })
}]).controller("FeaturesCtrl", ["$scope", "$log", function($scope,$log){
  $log.info("in the FeaturesCtrl");
}])
;
