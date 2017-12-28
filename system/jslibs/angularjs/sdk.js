(function(){
	angular.module("PH").service("sdk", sdk);

	sdk.$inject = ["$http"];

	function sdk($http){

		var self = this;


		self.executeApi = function(funName, data, feedback){

			if(feedback != undefined){
				$.ajax({
					type 		: 'POST',
					url			: "/index.php/api/" + funName,
					async		: true,
					data 		: data,
					dataType 	: 'json',
					success		: feedback,
					error		: function(result){
                        alert("系統繁忙，稍後再試1");
					}
				});
			}
			else{
				var res = [];
				$.ajax({
					type 		: 'POST',
					url			: "/index.php/api/" + funName,
					async		: false,
					data 		: data,
					dataType 	: 'json',
					success		: function(response){
				      res = response;

					},
					error		: function(result){
						alert("系統繁忙，稍後再試");
					}
				});

				
				return res;
			}
			
		};

	};
})();