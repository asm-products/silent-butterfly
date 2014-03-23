"use strict";
angular.module("silent-butterfly", ["templates-main"
    ,"ui.router",
    "ui.router.state",
    "ui.bootstrap",
    "silent-butterfly.home", 
    "silent-butterfly.features",
    "silent-butterfly.contact"])
.config(["$locationProvider", function($locationProvider){
  
}])
.run(["$state", "$stateParams", "$rootScope", function($state, $stateParams, $rootScope){
  $state.transitionTo("home");
}])
.controller("AppCtrl", ["$scope", "$state","$modal","$http","$log",function($scope,$state,$modal,$http,$log){
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Silent Butterfly' ;
    }
  });
}])
;
