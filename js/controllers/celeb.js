app.controller("celebController",function($scope,$routeParams){
	 $scope.currentCeleb = $scope.celebs[$routeParams.celebCode];
});