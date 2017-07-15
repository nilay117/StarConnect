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
			})
			.when("/artistlist",{templateUrl:"../partials/artistlist.html"})
			.when("/celebritylist",{templateUrl:"../partials/celeblist.html"})
			.when("/whatsup",{templateUrl:"../partials/whatsup.html"})
			.when("/trending",{templateUrl:"../partials/trending.html"});
});
