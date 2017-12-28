alert("1q1");
    var app = angular.module('myApp1');
    app.controller('myCtrl', function($scope) {
        alert("11");
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    });
