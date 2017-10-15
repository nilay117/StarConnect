
app.controller("artistController",function($scope,$routeParams,$window){
    $scope.currentArtist = $scope.artists[$routeParams.artistCode];
    
});
