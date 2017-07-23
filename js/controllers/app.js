app.controller("AppController",function ($scope){
	$scope.artists = {
		"1": {
			"code":"1",
			"name": "Fame The Band",
			"subtitle":"Musician",
			"fb":"https://m.facebook.com/FameBandOfficial/",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/fame.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"1",
			"thumbnail":"img/fame.jpg",
			"song":"Just This Smile",
			"url":"https://www.youtube.com/watch?v=ncgRnjc940g",
			"about":"We as a band have many influences (who doesn't though?), which is why we prefer to be not maybe just be 'in the box."
		},
		"2": {
			"code":"2",
			"name": "Hitesh Kumar",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/hitesh.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/old.jpg",
			"song":"The Old Peace",
			"url":"https://www.youtube.com/watch?v=_YDuEHrzs5c",
			"about":"A singer and songwriter, I aspire to be the best at what I do."
		},
		"3": {
			"code":"3",
			"name": "Sahili Shah",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/shaili.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/banjara.jpg",
			"song":"Banjara Soulsmiths",
			"url":"https://www.youtube.com/watch?v=Sm-n0-5dFzY",
			"about":" A singer by profession, passion and love; a gujju by birth; a graduate by force; a traveler by choice. A maze for some, a simpler-maze for the rest."
		},
		"4": {
			"code":"4",
			"name": "Kushal Jasoria",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/kushal.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/21.jpg",
			"song":"I'm 21",
			"url":"https://www.youtube.com/watch?v=XCqg3FwEwV4",
			"about":"Hi I'm Kushal Jasoria. I make music videos and VLOGS."
		},
		"5": {
			"code":"5",
			"name": "Ashutosh Singh",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/ashutosh.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"5",
			"thumbnail":"img/ishq.jpg",
			"song":"Ishq Sufiana",
			"url":"https://www.youtube.com/watch?v=Mx_0vEdv2T0",
			"about":"Lead vocalist and band manager at Heptonik, a versatile hindi-rock band That composes own music on popular Bollywood songs. Covers include old & new Bollywood Semi-Classical and Rock tracks along with vocals and instrumental solos."
		},
		"6": {
			"code":"6",
			"name": "Shubham Verma",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/shubham.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/sabtera.jpg",
			"song":"Sab Tera",
			"url":"https://www.youtube.com/watch?v=C_ANRc-x1XA",
			"about":"Aspiring Artist"
		},
		"7": {
			"code":"7",
			"name": "Sumit Misra",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/sumit.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/ragjog.jpg",
			"song":"Rag Jog",
			"url":"https://www.youtube.com/watch?v=qOlFWm4F0S4",
			"about":"Aspiring Artist"
		},
		"8": {
			"code":"8",
			"name": "Shashank Dixit",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/stings.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/fame.jpg",
			"song":"Zaroori Tha",
			"url":"https://www.youtube.com/watch?v=I2yYDufXj9E",
			"about":"Aspiring Artist"
		},
		"9": {
			"code":"9",
			"name": "Love Sagar",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/artist.png",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/starbappu.jpg",
			"song":"Star Bappu",
			"url":"https://www.youtube.com/watch?v=OPccDQry99M",
			"about":"Aspiring Artist"
		},
		"10": {
			"code":"10",
			"name": "Ujjwal Anand",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/ujwal.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/fame.jpg",
			"song":"Krrish Theme ",
			"url":"https://www.youtube.com/watch?v=HJLJruqbwL4",
			"about":"Aspiring Artist"
		},
		"11": {
			"code":"11",
			"name": "Hardik Tailor",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/hardik.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/bol.jpg",
			"song":"Bol Do Na Zara",
			"url":"https://www.youtube.com/watch?v=W5iLAHMuOy4",
			"about":"Aspiring Artist"
		},
		"12": {
			"code":"12",
			"name": "Miran Roy",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/miran.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/dil.jpg",
			"song":"Dil ka Suna saz",
			"url":"https://www.youtube.com/watch?v=ncgRnjc940g",
			"about":"Aspiring Artist"
		},
		"13": {
			"code":"13",
			"name": "Varun",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/artist.png",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/jalpari.jpg",
			"song":"Jalpari",
			"url":"https://www.youtube.com/watch?v=yct4MECaLN0",
			"about":"Aspiring Artist"
		},
		"14": {
			"code":"14",
			"name": "Varun",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/artist.png",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/fame.jpg",
			"song":"Just This Smile",
			"url":"https://www.youtube.com/watch?v=ncgRnjc940g",
			"about":"Aspiring Artist"
		},
		"15": {
			"code":"15",
			"name": "Shrikanth Nair",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/artist.png",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/aye.jpg",
			"song":"Aaye tum yaad humko",
			"url":"https://www.youtube.com/watch?v=U3t3lNnYLs0",
			"about":"Aspiring Artist"
		},
		"16": {
			"code":"16",
			"name": "Mohnish Grover",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/blunts.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/snuff.jpg",
			"song":"Snuff",
			"url":"https://www.youtube.com/watch?v=x_O5CefAm5Q",
			"about":"Aspiring Artist"
		},
		"17": {
			"code":"17",
			"name": "Tyrrhenian",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/tyrrhenian.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/tyrr.jpg",
			"song":"Live Performance",
			"url":"https://www.youtube.com/watch?v=kFqNBp7DwKI",
			"about":"Aspiring Artist"
		},
		"18": {
			"code":"18",
			"name": "Tialk Chakraborty",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/tilak.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"3",
			"thumbnail":"img/tumne.jpg",
			"song":"Tumne Mughe Phechana Nhi",
			"url":"https://www.youtube.com/watch?v=iWwEd8R09HI",
			"about":"Aspiring Artist"
		},
		"19": {
			"code":"19",
			"name": "Tailored Heaven",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/tailored.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/prison of.jpg",
			"song":"Prison of Reason",
			"url":"https://www.youtube.com/watch?v=SnwEAosv_cE",
			"about":"Aspiring Artist"
		},
		"20": {
			"code":"20",
			"name": "Danish Abdi",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/danish.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/canon.jpg",
			"song":"Classical Cannon",
			"url":"https://www.youtube.com/watch?v=XSeMEZZ-bnc",
			"about":"Aspiring Artist"
		},
		"21": {
			"code":"21",
			"name": "Brahmastra",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/brahmastra.jpg",
			"followers":"0",
			"following":"0",
			"ranking":"4",
			"thumbnail":"img/payal.jpg",
			"song":"Payal ki Jhankaar",
			"url":"https://www.youtube.com/watch?v=13T73FypiNc",
			"about":"Aspiring Artist"
		}
		
	};
	$scope.celebs = {
		"1": {
			"code":"1",
			"name": "Tushar Lall",
			"subtitle":"Musician",
			"fb":"https://www.google.com",
			"twitter":"https://www.google.com",
			"insta":"https://www.google.com",
			"img":"img/cb.jpg",
			"followers":"2,000,000",
			"following":"100",
			"endorsements":"5",
			"ranking":"1",
			"text":"21, Youtuber, Composer | The Indian Jam Project"
		},
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
