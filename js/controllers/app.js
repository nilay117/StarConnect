app.controller("AppController",function ($scope){
	$scope.artists = {
		"1": {
			"code":"1",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg",
			"followers":"2",
			"following":"2,000"
		},
		"2": {
			"code":"2",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg",
			"followers":"2",
			"following":"2,000"
		},
		"3": {
			"code":"3",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg",
			"followers":"2",
			"following":"2,000"
		},
		"4": {
			"code":"4",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg",
			"followers":"2",
			"following":"2,000"
		},
		"5": {
			"code":"5",
			"name": "Madhur Wadhwa",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg",
			"followers":"2",
			"following":"2,000"
		}
		
	};
	$scope.celebs = {
		"1": {
			"code":"1",
			"name": "Daft Punk",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/cb.jpg",
			"followers":"2,000,000",
			"following":"100",
			"endorsements":"5"
		},
		"2": {
			"code":"2",
			"name": "Daft Punk",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/cb.jpg",
			"followers":"2,000,000",
			"following":"100",
			"endorsements":"5"
		},
		"3": {
			"code":"3",
			"name": "Daft Punk",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/cb.jpg",
			"followers":"2,000,000",
			"following":"100",
			"endorsements":"5"
		},
		"4": {
			"code":"4",
			"name": "Daft Punk",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/cb.jpg",
			"followers":"2,000,000",
			"following":"100",
			"endorsements":"5"
		},
		"5": {
			"code":"5",
			"name": "Daft Punk",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/cb.jpg",
			"followers":"2,000,000",
			"following":"100",
			"endorsements":"5"
		}
		
	};

	$scope.currentArtist = null;

	$scope.setArtist = function(code){
		$scope.currentArtist = $scope.artists[code];
	}

	$scope.currentCeleb = null;

	$scope.setCeleb = function(code){
		$scope.currentCeleb = $scope.celebs[code];
	}
});
