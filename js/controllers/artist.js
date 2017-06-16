app.controller("artistController",function($scope,$routeParams){
	 $scope.currentArtist = $scope.artists[$routeParams.artistCode];
});