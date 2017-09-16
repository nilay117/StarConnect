app.controller("AppController",function ($scope,$http,$window){
	$scope.currentUser;
	$scope.thankyou_data;
	$scope.baseUrl = 'https://starconnect.org.in/'
	$http({
		method:'GET',
		url:'https://starconnect.org.in/connect/api/get_dashboard/'
	}).then(function successCallback(response){
		console.log(response.data)
		$scope.artists = response.data['artists'];
		console.log($scope.artists)
		$scope.cas = response.data['ambassadors'];
	});
	$(document).ready(function(){
		console.log("I am inside");
		var data = {}
		$scope.login = false;
		if($window.sessionStorage.token){
			delete $window.sessionStorage.token;
			console.log(data)
			data['username'] = $window.sessionStorage.username;
			data['password'] = $window.sessionStorage.password
			$http({
				method:'POST',
				url:'https://starconnect.org.in/connect/api/api_token',
				data:data
			}).then(function successCallback(response){
				$window.sessionStorage.token = response.data['token'];
				// $scope.login = true;
				$http.defaults.headers.common['Authorization'] = 'JWT '+ $window.sessionStorage.token;
				$http({
					method:'GET',
					url:'https://starconnect.org.in/connect/api/profiles/',
					headers: {
						'Content-Type' : 'application/json'
					},
				}).then(function successCallback(response){
					$scope.currentUser = response.data;
					console.log(response.data,$scope.currentUser)
					$scope.login = true;
				});
			});
		}
	})
	$scope.celebs = {
		"1": {
			"code":"1",
			"name": "Parikrama",
			"subtitle":"Musician",
			"fb":"https://www.facebook.com/parikrama/",
			"twitter":"https://twitter.com/parikrama",
			"insta":"https://www.instagram.com/parikramaindia/",
			"img":"img/Parikrama.jpg",
			"followers":"0",
			"following":"0",
			"endorsements":"0",
			"text":"Parikrama is a rock and roll band from Delhi, India.. The band was officially formed on 17 June 1991 in Delhi. With more than 3000 gigs and still the same energy on stage , they are known for their attitude towards acknowledging fame with a nod and then moving on, carrying forward the flame of Indian rock from generation to generation."
		},
		"2": {
			"code":"2",
			"name": "Euphoria",
			"subtitle":"Musician",
			"fb":"https://www.facebook.com/euphoria.dhoom/",
			"twitter":"https://twitter.com/euphoriatweets?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
			"insta":"https://www.instagram.com/euphoriafest/?hl=en",
			"img":"img/Euphoria.jpg",
			"followers":"0",
			"following":"0",
			"endorsements":"0",
			"text":" Euphoria is an Indian rock band from the city of Delhi, India. Euphoria was started by Palash Sen and his friends in New Delhi in 1988, and is one of the pioneers of the Indian pop music wave that hit India in the mid nineties. Their first sinlge, titled 'Dhoom Pichuk Dhoom' – became the most popular video to hit TV screens in that decade and a benchmark for non-Bollywood music videos."
		},
		"3": {
			"code":"3",
			"name": "Thaikkudam Bridge",
			"subtitle":"Musician",
			"fb":"https://www.facebook.com/thaikkudambridge",
			"twitter":"https://twitter.com/thaikudambridge?lang=en",
			"insta":"https://www.instagram.com/thaikkudambridge/?hl=en",
			"img":"img/tbridge.jpg",
			"followers":"0",
			"following":"0",
			"endorsements":"0",
			"text":"Thaikkudam Bridge is a Kerala-based music band, founded and formed in 2013 .The band first became famous through the musical show Music Mojo, and their own composition - Fish Rock. They do not focus on any specific genre and have composed in many different genres. The band literally had its inception near Thaikkudam Bridge at Thaikkudam, Ernakulam, Kerala in early 2013. Since then, the band has gone on to win numerous awards, perform at over 400 venues and released their own album."
		},

		"4": {
			"code":"4",
			"name": "Swarathma",
			"subtitle":"Musician",
			"fb":"https://www.facebook.com/swarathma/",
			"twitter":"https://twitter.com/swarathma",
			"insta":"https://www.instagram.com/swarathma/",
			"img":"img/Swarathma.jpg",
			"followers":"0",
			"following":"0",
			"endorsements":"0",
			"text":"Swarathma is a Bangalore-based Indian Folk-Rock band, that is known for its visually electric, high-energy live act. Their first album came out in 2009 followed by the highly acclaimed Topiwalleh (2012), that redefines their sound. With several international tours, and TV appearances, they are one of India's leading Folk-Rock bands "
		},

		"5": {
			"code":"5",
			"name": "Tushar Lall",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/cb2.jpg",
			"followers":"2,000,000",
			"following":"100",
			"endorsements":"5",
			"ranking":"1",
			"text":"21, Youtuber, Composer | The Indian Jam Project"
		},
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
