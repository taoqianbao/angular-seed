'use strict';

angular.module('myApp.cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/shop', {
        templateUrl: 'shop/index.html',
        //controller: 'cartCtrl'
    });
}])

.controller('cartCtrl', function($scope) {

    console.log('cartCtrl');


    $scope.discount = 0.9;

    $scope.items = [{
        id: 101,
        title: 'book one',
        price: 40.84,
        quantity: 1,
        linkUrl: 'http://www.baidu.com'
    }, {
        id: 102,
        title: 'book 22222',
        price: 40.84,
        quantity: 1,
        linkUrl: 'http://www.baidu.com'
    }, {
        id: 103,
        title: 'book 33333',
        price: 40.84,
        quantity: 1,
        linkUrl: 'http://www.baidu.com'
    }];

    $scope.add = function(id) {
        angular.forEach($scope.items, function(item, index, array) {
            if (item.id === id) {
                item.quantity++;
            }
        });
    };

    $scope.reduce = function(id) {
        angular.forEach($scope.items, function(item, index, array) {
            if (item.id === id) {
                item.quantity--;
            }
        });
    };

    //输入框添加keydown事件，避免输入非正整数
    $scope.quantityKeydown = function(event) {

        event = event || window.event;

        var target = event.target || event.srcElement;
        var keycode = event.keyCode;
        if ((37 <= keycode && keycode <= 40) || (48 <= keycode && keycode <= 57) || (96 <= keycode && keycode <= 105) || keycode == 8) {

            //方向键↑→ ↓←、数字键、backspace
        } else {
            console.log(keycode);
            event.preventDefault();
            return false;
        }

    };

    //keyup事件，当输入数字为0时，重新刷新文本框内容
    $scope.quantityKeyup = function(event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        var keycode = event.keyCode;
        if (key === keycode || 96 === keycode) {
            target.value = parseInt(target.value);
        }
    };


    $scope.delete = function(id) {
        $scope.items.forEach(function(item, index) {
            if (item.id == id) {
                if (confirm('are you sure remove? ')) {
                    $scope.items.splice(index, 1);
                    return;
                }
            }
        });
    };

    $scope.getQuantites = function() {
        var quantities = 0;
        angular.forEach($scope.items, function(item, index, array) {
            if (item.quantity) {
                quantities += parseInt(item.quantity);
            }
        });
        return quantities;
    };

    $scope.getTotalAmount = function() {
        var totalAmount = 0;
        angular.forEach($scope.items, function(item, idnex, array) {
            totalAmount += item.quantity * item.price
        });
        return totalAmount;
    };

    $scope.alertSubmit = function() {
        alert('angular submit ok')
    };

});
