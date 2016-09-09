'use strict';

angular.module('myApp.index', [])

.controller('IndexCtrl', function($scope, $location) {

    console.info('IndexCtrl');

    $scope.$location = {};

    angular.forEach("protocol host port path search hash".split(" "), function(method) {

        $scope.$location[method] = function() {
            var result = $location[method].call($location);
            return angular.isObject(result) ? angular.toJson(result) : result;
        };

    });

    $scope.currentNav;

    $scope.navList = [{
        id: "view1",
        name: "view1"
    }, {
        id: "view2",
        name: "view2"
    }, {
        id: "view3",
        name: "view3"
    }];

    $scope.handle_nav = function(item) {
        $scope.currentNav = item;
    };

});