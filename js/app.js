var app = angular.module("starConnect",["ngRoute"]);
app.config(function($routeProvider,$httpProvider){

	$httpProvider.defaults.xsrfCookieName = 'csrftoken';

    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

	$routeProvider
			.when("/",{templateUrl:"../partials/main.html"})
			.when("/joinus",{
				templateUrl:"../partials/joinus.html",
				controller:'formController'
			})
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
			.when("/videolist",{
				templateUrl:"../partials/videolist.html",
				controller:'videoController'
			})
			.when("/trending",{
				templateUrl:"../partials/trending.html",
			})
			.when("/login",{
				templateUrl:"../partials/login.html",
				controller:'loginController'
			})
			.when("/user",{templateUrl:"../partials/user.html"})
			.when("/campusambassador",{
				templateUrl:"../partials/form_ca.html",
				controller:'caController'
			})
			.when('/success',{templateUrl:"../partials/success.html"})
			.when('/partners',{templateUrl:"../partials/partners.html"})
});
