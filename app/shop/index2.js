'use strict';

angular.module('myApp.cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/shop', {
        templateUrl: 'shop/index.html',
        controller: 'cartCtrl'
    });
}])

.controller('cartCtrl', [function($scope) {
    console.info('cartCtrl');
}]);
