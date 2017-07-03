app.controller("AppController",function ($scope){
	$scope.artists = {
		"1": {
			"code":"1",
			"name": "Madhur Wadhwa1",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg",
			"followers":"2",
			"following":"2,000",
			"ranking":"5"
		},
		"2": {
			"code":"2",
			"name": "Madhur Wadhwa2",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg",
			"followers":"2",
			"following":"2,000",
			"ranking":"4"
		},
		"3": {
			"code":"3",
			"name": "Madhur Wadhwa3",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg",
			"followers":"2",
			"following":"2,000",
			"ranking":"3"
		},
		"4": {
			"code":"4",
			"name": "Madhur Wadhwa4",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg",
			"followers":"2",
			"following":"2,000",
			"ranking":"2"
		},
		"5": {
			"code":"5",
			"name": "Madhur Wadhwa5",
			"subtitle":"Graphic Designer",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/mw.jpg",
			"followers":"2",
			"following":"2,000",
			"ranking":"1"
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
			"endorsements":"5",
			"ranking":"1"
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
			"endorsements":"5",
			"ranking":"3"
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
			"endorsements":"5",
			"ranking":"2"
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
			"endorsements":"5",
			"ranking":"5"
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
			"endorsements":"5",
			"ranking":"4"
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
