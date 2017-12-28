$(function () {
    var app = angular.module('PH');
    app.controller('myCtrl', function($scope) {
        alert("11");
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    });
})
