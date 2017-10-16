
app.controller("artistController",function($scope,$rootScope,$sce,$routeParams,$window){
    if(Object.keys($rootScope.artists).length == 0){
    	$rootScope.getData();
    	init();
    }else{
    	init();
    }
    $scope.currentArtist = {};
    $scope.url = '';
    var init = function(){

    $scope.currentArtist = $rootScope.artists[$routeParams.artistCode];    
    	console.log($rootScope.artists,$scope.currentArtist);
  		var videourl = $scope.currentArtist.connects[0]['upload_link'].slice(32);
  		if(videourl.indexOf('&') != -1){
  			videourl = videourl.substr(0,videourl.indexOf('&'));
  		}
        $scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+videourl);
		console.log("Youtube loaded!")
    }

});
