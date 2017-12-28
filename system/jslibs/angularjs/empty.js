(function(){
	angular.module("PH").controller("appController", appController);

	appController.$inject = ["$scope", "sdk"];

	function appController($scope, sdk){
    	var self = this;
        $scope.aaa="sdfsd";
    	self.init = function(){

    	};

    	self.init();
	};
})();