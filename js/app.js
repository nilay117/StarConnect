var app = angular.module("starconnect",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
			.when("/",{templateUrl:"partials/main.html"});
});

