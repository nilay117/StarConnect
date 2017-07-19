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
			"ranking":"1",
			"text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
			"ranking":"3",
			"text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
			"ranking":"2",
			"text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
			"ranking":"5",
			"text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
			"ranking":"4",
			"text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		}
		
	};
	$scope.trending = {
		"1":{
			"code":"1",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"2":{
			"code":"2",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"3":{
			"code":"3",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"4":{
			"code":"4",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"5":{
			"code":"5",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"6":{
			"code":"6",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		}
	};
	$scope.videos = {
		"1":{
			"code":"1",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"2":{
			"code":"2",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"3":{
			"code":"3",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"4":{
			"code":"4",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"5":{
			"code":"5",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"6":{
			"code":"6",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"7":{
			"code":"7",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"8":{
			"code":"8",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"9":{
			"code":"9",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"10":{
			"code":"10",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"11":{
			"code":"11",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		},
		"12":{
			"code":"12",
			"src":"https://www.youtube.com/embed/hQDck3xT9TY",
			"title":"Still Brazy",
			"artist":"YG",
			"img":"img/cb.jpg",
			"views":"500k"
		}
	};
	$scope.colleges = {
		"1":{
			"img":"img/college.jpg",
			"name":"Sri Ram College Of Commerce(SRCC)",
			"city":"New Delhi",
			"views":"2m"
		},
		"2":{
			"img":"img/college.jpg",
			"name":"Sri Ram College Of Commerce(SRCC)",
			"city":"New Delhi",
			"views":"2m"
		},

		"3":{
			"img":"img/college.jpg",
			"name":"Sri Ram College Of Commerce(SRCC)",
			"city":"New Delhi",
			"views":"2m"
		},

		"4":{
			"img":"img/college.jpg",
			"name":"Sri Ram College Of Commerce(SRCC)",
			"city":"New Delhi",
			"views":"2m"
		},

		"5":{
			"img":"img/college.jpg",
			"name":"Sri Ram College Of Commerce(SRCC)",
			"city":"New Delhi",
			"views":"2m"
		},

		"6":{
			"img":"img/college.jpg",
			"name":"Sri Ram College Of Commerce(SRCC)",
			"city":"New Delhi",
			"views":"2m"
		}
	}
	$scope.currentArtist = null;

	$scope.setArtist = function(code){
		$scope.currentArtist = $scope.artists[code];
	}

	$scope.currentCeleb = null;

	$scope.setCeleb = function(code){
		$scope.currentCeleb = $scope.celebs[code];
	}
});
