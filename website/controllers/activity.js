(function()
{
	angular
		.module('PH')
		.controller('ActivityController', ActivityController);

	ActivityController.$inject = ['$scope', 'UserData', 'LanMgr', 'sdk'];


	function ActivityController( $scope, UserData, LanMgr, sdk)
	{

		var self = this;

		$( 'html, body').animate({
		   scrollTop: 0}, 0);

		self.currentPage = 2;
		self.itemsPerPage = 6;
		self.totalItems = 50; //晚點放入相簿資料後，直接取相簿的長度
		self.pagesLength = 4;

		$scope.albumDatas = []; //與Server界接的資料使用
		$scope.albumPics = []; //按下相簿後去取圖片資料用
		$scope.albumShowDatas = []; //要展示的資料
		$scope.albumShowPics = []; //要展示的圖片資料

		$scope.showAlbum = '0';
		$scope.showSlider = '0';
		self.choiceIndex = -1;
		$scope.choicePic = '';

		$scope.choiceAlbumName = "";
		$scope.choiceAlbumID = -1;

		$scope.backToAlbum = function() {
			$scope.showAlbum="0";
			self.itemsPerPage = 6;
			self.GetAlbumFromHttp();
			self.pageInit();
		};

		$scope.clickAlbum = function(index) {
			$scope.choiceAlbumID = $scope.albumShowDatas[index].id;
			$scope.choiceAlbumName = $scope.albumShowDatas[index].name;

			console.log($scope.choiceAlbumID);

			$scope.albumShowPics = [];
			$scope.showAlbum= '1';
			//跟Server要這個id下所有照片的資料
			self.itemsPerPage = 16;
			self.GetPicsFromHttp($scope.choiceAlbumID);
			self.pageInit();
		};

		$scope.clickShowSlider = function(index) {
			$scope.showSlider = '1';
			self.choiceIndex = index + (self.itemsPerPage * (self.currentPage - 1));
			$scope.choicePic = $scope.albumPics[self.choiceIndex].name;
		};

		$scope.sliderClose = function () {
			$scope.showSlider='0';
		};

		$scope.sliderLeft = function () {
			self.choiceIndex--;
			if(self.choiceIndex < 0) self.choiceIndex = $scope.albumPics.length - 1;
			$scope.choicePic = $scope.albumPics[self.choiceIndex].name;
		};
		$scope.sliderRight = function () {
			self.choiceIndex++;
			if(self.choiceIndex > ($scope.albumPics.length - 1)) self.choiceIndex = 0;
			$scope.choicePic = $scope.albumPics[self.choiceIndex].name;
		};

		self.pageInit = function () 
		{
			self.currentPage = 1;

			if($scope.showAlbum == '0')
				self.totalItems = $scope.albumDatas.length;
			else if($scope.showAlbum == '1')
				self.totalItems = $scope.albumPics.length;

			if(!$scope.paginationConf)
			{
				$scope.paginationConf = 
				{
		            currentPage: self.currentPage,
		            totalItems: self.totalItems,
		            itemsPerPage: self.itemsPerPage,
		            pagesLength: self.pagesLength,
		            perPageOptions: [10, 20, 30, 40, 50],
		            onChange: self.pageChange,
	            };
	        }
	        else
	        {
	        	$scope.paginationConf.currentPage = self.currentPage;
	        	$scope.paginationConf.totalItems = self.totalItems;
	        	$scope.paginationConf.itemsPerPage = self.itemsPerPage;
	        	self.pageChange();
	        }
		};

		self.pageChange = function ()
		{
			//讀取那一頁的資料，替換資料
			self.currentPage = $scope.paginationConf.currentPage;
			var startIndex = (self.currentPage - 1) * self.itemsPerPage;

			if($scope.showAlbum == '0')
			{
				$scope.albumShowDatas = [];
				for(var i =0; i < self.itemsPerPage; i++)
				{
					if(startIndex + i < ($scope.albumDatas.length))
					{
						$scope.albumShowDatas.push($scope.albumDatas[startIndex + i])
					}
				}
			}
			else if($scope.showAlbum == '1')
			{
				$scope.albumShowPics = [];
				for(var i =0; i < self.itemsPerPage; i++)
				{
					if(startIndex + i < ($scope.albumPics.length))
					{
						$scope.albumShowPics.push($scope.albumPics[startIndex + i])
					}
				}
			}
		};

		self.dataInit = function () 
		{
			self.GetAlbumFromHttp();
	        self.pageInit();
		}	;

		self.uiInit = function ()
		{
			
		};

		//http method;
        function writeObj(obj){
            var description = "";
            for(var i in obj){
                var property=obj[i];
                description+=i+" = "+property+"\n";
            }
            alert(description);
        }
        //獲得舞團所有相本
		self.GetAlbumFromHttp = function ()
		{
			var danceAlbumData = [];
	        var actAlbumData = [];
	        $scope.albumDatas = [];
			//跟Server要舞團相本跟活動相本的資料
			var DataObj = {
				id:0,
			};
			var result = sdk.executeApi("showactivity", DataObj);
			console.log(result.length);
            if(result.length>0)
			{
				var albumList = result;

                for(var i = 0; i < albumList.length; i++)
				{

					var cover =(JSON.parse(albumList[i].cover))[0].path;
                    albumList[i].cover_name = "../system/files/" + cover;
                    albumList[i].name =albumList[i].title ;
					$scope.albumDatas.push(albumList[i]);
				}
				self.pageInit();
			}

	        // .then(function(result)
	        // {
	        // 	if(result.Ret == ResultMsg.LoginReply.Failed)
	        // 	{
	        // 		//DialogService.OpenMessage(DIALOG_MODE.ONEBTN, LanMgr.Get(CS_Login.LOGIN_FAIL), LanMgr.Get(CS_Login.RE_LOGIN_MSG), self.loginFailed);
	        // 	}
	        // 	else if(result.Ret == ResultMsg.LoginReply.Success)
	        // 	{
	        // 		var albumList = result.Data.MonthlyData;
	        // 		console.log(albumList.length);
				// 	for(var i = 0; i < albumList.length; i++)
				// 	{
				// 		albumList[i].cover_name = "../activityupload/" + albumList[i].cover_name;
				// 		$scope.albumDatas.push(albumList[i]);
				// 	}
				// 	self.pageInit();
	        // 	}
	        // }
			// );
		};

		//取得某相本內所有資料
		self.GetPicsFromHttp = function(album_id)
		{
			$scope.albumPics = [];
			var DataObj = {
				id : album_id
			};
            var result  = sdk.executeApi("showpics", DataObj);
			if(result!=null && result!=undefined){
                albumPicList= JSON.parse(result.imgs);
				for(var i = 0; i < albumPicList.length; i++)
				{
					albumPicList[i].name = "../system/files/" + albumPicList[i].path;
					$scope.albumPics.push(albumPicList[i]);
				}
				self.pageInit();
			}
	        // .then(function(result)
	        // {
	        // 	if(result.Ret == ResultMsg.LoginReply.Success)
	        // 	{
	        // 		var albumPicList = result.Data.MonthlyPicData;
	        // 		console.log(albumPicList.length);
				// 	for(var i = 0; i < albumPicList.length; i++)
				// 	{
				// 		albumPicList[i].name = "../activityupload/" + albumPicList[i].name;
				// 		$scope.albumPics.push(albumPicList[i]);
				// 	}
	        // 		self.pageInit();
	        // 	}
	        // });
		};



		self.dataInit();
		self.uiInit();
	}
})();