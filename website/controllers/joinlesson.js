(function()
{
	angular
		.module('PH')
		.controller('JoinLessonController', JoinLessonController);

	JoinLessonController.$inject = ['$scope','UserData', '$window', '$interval', 'HttpService'];

	function JoinLessonController( $scope, UserData, $window, $interval, HttpService)
	{
		var self = this;

		// options
    	$scope.actions = 
    			[{key:"1",value:"幼兒律動"},
                {key:"2",value:"芭蕾舞"},
                {key:"3",value:"現代舞"},
                {key:"4",value:"中國舞"},
                {key:"5",value:"兒童街舞"},
                {key:"6",value:"MV舞蹈"},
                {key:"7",value:"成人瑜珈"},
                {key:"8",value:"成人有氧"},
                {key:"9",value:"成人芭蕾"},
                {key:"10",value:"成人現代"}]; 

		self.dataInit = function () 
		{
			
		};

		self.uiInit = function ()
		{
			
		};
                
		self.initJoinForm = function() {
			$scope.name = "";
    	    $scope.phone = "";
        	$scope.lesson = "";
        	$scope.message = "";
        	$scope.email = "";
		};

		$scope.normalJoin = function()
		{
			var DataObj = {
				name : $scope.name,
				phone : $scope.phone,
				email : $scope.email,
				lesson : $scope.lesson,
				message : $scope.message
			};
			HttpService.HttpPost(SOCKET_DEF.URL , SERVICE_TYPE.JOIN , ACTION_TYPE.JOIN_NORMAL, DataObj)
			.then(function(result) 
	        {
	        	if(result.Ret == ResultMsg.LoginReply.Success)
	        	{
	        		alert("報名成功");
	        		self.initJoinForm();
	        	}
	        	else if(result.Ret == -1)
	        	{
	        		alert("報名失敗");
	        		self.initJoinForm();
	        	}
	        });
		};
		
		self.initJoinForm();

		angular.element(document).ready(function () {
	        self.uiInit();
	        self.dataInit();
        });
	}

})();