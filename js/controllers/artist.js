
app.controller("artistController",function($scope,$rootScope,$sce,$routeParams,$window){
    $scope.currentArtist = {};
    $scope.url = '';
    $scope.init = function(){

    $scope.currentArtist = $rootScope.artists[$routeParams.artistCode];    
    	console.log($rootScope.artists,$scope.currentArtist);
  		var videourl = $scope.currentArtist.connects[0]['upload_link'].slice(32);
  		if(videourl.indexOf('&') != -1){
  			videourl = videourl.substr(0,videourl.indexOf('&'));
  		}
        $scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+videourl);
		console.log("Youtube loaded!")
    }
    if(Object.keys($rootScope.artists).length == 0){
    	$http({
		method:'GET',
		url:'https://starconnect.org.in/connect/api/get_dashboard/'
		}).then(function successCallback(response){
			$rootScope.artists = response.data['artists'];
			$scope.cas = response.data['ambassadors'];
			$scope.init();
			// artistsforvids = $scope.artists;
	 
	       });
    }else{
    	$scope.init();
    }

});
