var app = angular.module("starconnect",[]);
app.controller("ArtistCtrl",function ($scope){
	$scope.artists = {
		"1": {
			"code":"1",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg"
		},
		"2": {
			"code":"2",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg"
		},
		"3": {
			"code":"3",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg"
		},
		"4": {
			"code":"4",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg"
		},
		"5": {
			"code":"5",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg"
		}
		
	}

	$scope.currentArtist = null;

	$scope.setArtist = function(code){
		$scope.currentArtist = $scope.artists[code];
	}
});
app.controller("CelebCtrl",function ($scope){
	$scope.celebs = {
		"1": {
			"code":"1",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg"
		},
		"2": {
			"code":"1",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg"
		},
		"3": {
			"code":"1",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg"
		},
		"4": {
			"code":"1",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg"
		},
		"5": {
			"code":"1",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg"
		}
		
	}
});