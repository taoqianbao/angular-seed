<!--
ng-app
ng-controller
ng-show
ng-disabled
ng-repeat
ng-click
ng-keydown
ng-keyup


ngSanitize
  $sanitize, ng-bind-html, ng-bind-html-unsafe


ngRoute
  $routeProvider, $localProvider, $routeParams

-->
'use strict';

angular.module('myApp', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider){

$routeProvider
.when('/aaa/:num', {templateUrl: '', controller: 'AaaCtrl'})
.otherwise({
  redirectTo: '/bbb'
})

}])

.controller('IndexCtrl', ['$scope','$sanitize', function($scope){

  console.log('IndexCtrl');

  $scope.safeContent = 'hello world';

  $scope.myUnsafeHTMLContent = '<p style="color:blue">an html' + '<em>click here</em>' + 'snippet</p>';

}]);
