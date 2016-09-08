'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/view3', {
        templateUrl: 'view3/view3.html',
        controller: 'View3Ctrl'
    });

}])

.controller('View3Ctrl', ["$scope", "$q", "githubService", function($scope, $q, githubService) {

    console.info('View3Ctrl');

    $scope.flag = true;
    $scope.show = false;
    $scope.progress = 0;

    $scope.handle_github = function() {

        $scope.show = true;
        $scope.data = [];
        $scope.progress = 0;

        githubService.getPullRequests()
            .then(function(result) {
                $scope.data = result;

            }, function(error) {
                $scope.data = "error!";

            }, function(progress) {
                $scope.progress = progress;
                $scope.show = false;

            });
    };

    $scope.handle = function() {

        var deferred = $q.defer();
        var promise = deferred.promise;

        promise.then(function(result) {
                result = "success: you have passed the first then():" + result;
                console.log(result);
                return result;

            }, function(error) {

                error = "failed: but you have passed the first then:" + error;
                console.log(error);
                return error;

            }, function(notify) {
                console.log("notify:" + notify);
            })
            .then(function(result) {
                console.log('success:' + result);

            }, function(error) {
                console.log('fail:' + error);

            })
            .catch(function() {
                console.log('catch');
            })
            .finally(function() {
                console.log('finally');
            });

        deferred.notify((new Date()));

        if ($scope.flag) {
            deferred.resolve("you are lucky");
        } else {
            deferred.reject("sorry, it lost");
        }
    };
}]);
