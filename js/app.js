var app = angular.module("starConnect",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
			.when("/",{templateUrl:"../partials/main.html"})
			.when("/joinus",{templateUrl:"../partials/joinus.html"})
			.when("/artist/:artistCode",{
				templateUrl:"../partials/artists.html",
				controller:'artistController'
			})
			.when("/celebrity/:celebCode",{
				templateUrl:"../partials/celebrity.html",
				controller:'celebController'
			});
});
