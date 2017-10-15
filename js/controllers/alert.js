
app.controller("alertController",function($scope,$routeParams,$window){
 	$scope.closeAlert = function(e){
		document.getElementById('alert-wrapper').className = "hidden";
	}
    
});