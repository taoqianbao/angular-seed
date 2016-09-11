'use strict';

// Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

angular.module('myApp', [
        'ngRoute',
        'myApp.index',
        'myApp.view1',
        'myApp.view2',
        'myApp.view3',
        'myApp.service',
        'myApp.version',
        'myApp.cart'
    ])
    .config(['$locationProvider', '$routeProvider',
        function($locationProvider, $routeProvider) {

            $locationProvider.hashPrefix('!');

            $routeProvider.otherwise({
                redirectTo: '/view1'
            });

            // $locationProvider.html5Mode({
            //     enable: true,
            //     requireBase: false
            // });
        }
    ]);
