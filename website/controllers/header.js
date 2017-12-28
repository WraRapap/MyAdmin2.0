(function()
{
    angular.module("PH").controller("HeaderController", HeaderController);
    HeaderController.$inject = ['$scope','UserData', 'LanMgr', '$window'];
	function HeaderController($scope,UserData, LanMgr, $window)
	{
		var self = this;



		$scope.TwFont="fadeIn";
		$scope.ChFont="";

		$scope.lessonMenuShow = "";
		$scope.activityMenuShow = "";
		$scope.joinMenuShow = "";

        $scope.ClickContact = function() {
        	location.href="contact.htm";
            self.closeMMenu();
        };

		$scope.LanguageChange = function (lanType)
		{
			LanMgr.SetLan(lanType);
			if(lanType == 0)
			{
				$scope.TwFont="fadeIn";
				$scope.ChFont="";
			}
			else if(lanType == 2)
			{
				$scope.TwFont="";
				$scope.ChFont="fadeIn";
			}
		};

		self.onAccountChange = function ()
		{
			//$scope.userType = UserData.getIdentify();
		};



		$scope.ClickJoin = function() {
            location.href="join.htm";
			self.closeMMenu();
		};

		$scope.ClickJoinLesson = function() {
            location.href="joinlesson.htm";
			self.closeMMenu();
		};

		$scope.ClickAbout = function() {
            location.href="about.htm";
			self.closeMMenu();
		};

		$scope.ClickLesson = function(id) {
            location.href="lesson.htm?typeID="+id;
            // $state.go('lesson', {'typeID' : id});
			self.closeMMenu();
		};

		$scope.ClickTeacher = function() {
			// $state.go('teacher', {'tNumber' : 'origin'});
            location.href="teacher.htm?origin";
			self.closeMMenu();
		};

		$scope.ClickActivity = function() {
			// $state.go('activity');
            location.href="activity.htm";
			self.closeMMenu();
		};

		$scope.activityListEnter = function() {
			$scope.activityMenuShow = "show";
		};
		$scope.activityListLeave = function() {
			$scope.activityMenuShow = "";
		};

		$scope.lessonListEnter = function() {
			$scope.lessonMenuShow = "show";
		};
		$scope.lessonListLeave = function() {
			$scope.lessonMenuShow = "";
		};

		$scope.joinListEnter = function() {
			$scope.joinMenuShow = "show";
		};
		$scope.joinListLeave = function() {
			$scope.joinMenuShow = "";
		};

		self.closeMMenu = function() {
			$('nav#menu').data('mmenu').close();
		};

		self.dataInit = function ()
		{
			//$scope.userType = UserType.UnLogin;
		};

		self.uiInit = function ()
		{
			$scope.titleInfo = LanMgr.Get(CS_Header.BOARDSYSTEM);
			$scope.queryRentInfo = LanMgr.Get(CS_Header.QUERYRENTINFO);
			$scope.boardInfo = LanMgr.Get(CS_Header.BOARDINFO);
			$scope.logoutInfo = LanMgr.Get(CS_Header.LOGOUTINFO);
			$scope.addUserInfo = LanMgr.Get(CS_Header.ADDUSERINFO);
			$scope.addBoardInfo = LanMgr.Get(CS_Header.ADDBOARDINFO);

			$scope.languageInfo = LanMgr.Get(CS_Header.LANGUAGEINFO);
			$scope.chlanguage = CS_Header.LANGUAGEINFO.CH;
			$scope.enlanguage = CS_Header.LANGUAGEINFO.EN;
			$scope.cnlanguage = CS_Header.LANGUAGEINFO.CN;
		};

		$scope.$on(EvDef.AccChange, self.onAccountChange);
		$scope.$on(EvDef.LanChange, self.uiInit);

		$scope.userTypeDef = UserType;

		angular.element(document).ready(function () {
	        self.uiInit();
	        self.dataInit();
        });
	}
})();