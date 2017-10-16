
app.controller("AppController",function ($scope,$http,$window){
	$scope.currentArtist;
	$scope.collegename = "cla"
	jQuery(document).ready(function(){
	$scope.closeMenu = function(){
		jQuery(".side-nav").removeClass('open');
		jQuery('.button-cross').css("display","none")
	}
    $scope.menuClick = function(){
  		 	jQuery(".side-nav").addClass('open');
   			jQuery('.button-cross').css("display","block")
    	}
	});
		var artistsforvids;
		   	//This code loads the IFrame Player API code asynchronously.

	$scope.currentUser = {};
	$scope.thankyou_data;
	$scope.baseUrl = 'https://starconnect.org.in/'
	$http({
		method:'GET',
		url:'https://starconnect.org.in/connect/api/get_dashboard/'
	}).then(function successCallback(response){
		$scope.artists = response.data['artists'];
		$scope.cas = response.data['ambassadors'];
		artistsforvids = $scope.artists;
 
       })
	jQuery(document).ready(function(){
		
		var tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		console.log("Youtube loaded!")
	     //  This function creates an <iframe> (and YouTube player)
    	  //    after the API code downloads.
        var player;
        function onYouTubeIframeAPIReady() {
		console.log("onYouTubeIframeAPIReady");
          $.each(artistsforvids,function(i,key){
          	console.log(i,key);
            var id = key.id;
			console.log(key,id);
            var video_id = key.connects[0]['upload_link'].slice(32);
            player = new YT.Player(""+id+"", {
                height: '390',
                width: '640',
                videoId: video_id,
                origin:"https://www.example.com",
                events: {
                    'onReady': onPlayerReady
                }
            }); 
          })
      	}
		var data = {}
		$scope.login = false;
		console.log("check",$window.sessionStorage.currentUser);
		if($window.sessionStorage.currentUser){
			$scope.currentUser["first_name"] = $window.sessionStorage.name;
			$scope.currentUser["email"] = $window.sessionStorage.email;
			$scope.currentUser["profile_pic"] = $window.sessionStorage.profile_pic;
			$scope.login = true;
		}
		if($window.sessionStorage.token){
			delete $window.sessionStorage.token;
			data['username'] = $window.sessionStorage.username;
			data['password'] = $window.sessionStorage.password;
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
					url:'https://starconnect.org.in/connect/api/profile/',
					headers:{
						"content-type":"application/json",
						"Access-Control-Allow-Origin":"*"
						}
				}).then(function successCallback(response){
					$scope.currentUser = response.data;
					console.log('response.data')
					$scope.login = true;
				});
			});
		}
	})

	$scope.onGoogleLogin = function(){
		console.log("Google is clicked!!")
		var params = {
			'clientid':'673271682426-3r79fohr72fgqvvp3dldk3837t3vafl2.apps.googleusercontent.com',
			'cookiepolicy':'single_host_origin',
			'callback':function(result){
				if(result['status']['signed_in']){
					$scope.login = true;
					var request = gapi.client.plus.people.get(
						{
							'userId':'me'
						}
					);

					request.execute(function(resp){
						$scope.$apply(function(){
							$scope.currentUser["first_name"] = resp.displayName;
							$scope.currentUser["email"] = resp.emails[0].value;
							$scope.currentUser["profile_pic"] = resp.image.url;
							$window.sessionStorage.name = $scope.currentUser["first_name"];
							$window.sessionStorage.email = $scope.currentUser["email"];
							$window.sessionStorage.profile_pic = $scope.currentUser["profile_pic"];
							$window.sessionStorage.currentUser = true;
							$window.location.href = '/#!/';
						});
						console.log($window.sessionStorage.currentUser);
					});				
				}
			},
			'approvalprompt':'force',
			'scope':'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
		}

		gapi.auth.signIn(params);
	}
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
	// $scope.colleges = [
	// 	"1": {"name" : "St. Stephens College"},
	// 	"2": {"name" : "Lady Shri Ram College For Women"},
	// 	"3": {"name" : "Hindu College"},
	// 	"4": {"name" : "Miranda House"},
	// 	"5": {"name" : "Hansraj College"},
	// 	"6": {"name" : "Ramjas College"},
	// 	"7": {"name" : "Shri Ram College of Commerce"},
	// 	"8": {"name" : "Indraprastha College For Women "},
	// 	"9": {"name" : "Sri Venkateswara College "},
	// 	"10":{"name" : " Jesus & Mary College"},
	// 	"11":{"name" : " Gargi College"},
	// 	"12":{"name" : " Acharya Narendra Dev College"},
	// 	"13":{"name" : "  Deen Dayal Upadhyay College"},
	// 	"14":{"name" : " SGTB Khalsa College"},
	// 	"15":{"name" : " Sri Guru Gobind Singh College of Commerce"},
	// 	"16":{"name" : " Shaheed Bhagat Singh College"},
	// 	"17":{"name" : " Kirori Mal College"},
	// 	"18":{"name" : " Daulat Ram College"},
	// 	"19":{"name" : " Sri Aurobindo College "},
	// 	"20":{"name" : " Kamala Nehru College"},
	// 	"21":{"name" : " Shaheed Sukhdev College of Business Studies"},
	// 	"22":{"name" : " Delhi College of Arts & Commerce"},
	// 	"23":{"name" : " Dayal SIngh College"},
	// 	"24":{"name" : " Kirori Mal College"},
	// 	"25":{"name" : " Motilal College"},
	// 	"26":{"name" : " Sri Guru Nanak Dev Khalsa College"},
	// 	"27":{"name" : " P.G.D.A.V. College"},
	// 	"28":{"name" : " Lakshmibai College"},
	// 	"29":{"name" : " Lady Irwin College"},
	// 	"30":{"name" : "  Vivekananda College"},
	// 	"31":{"name" : " College of Vocational Studies"},
	// 	"32":{"name" : " Maharaja Agrasen College "},
	// 	"33":{"name" : " Delhi College of Arts and Commerce (DCAC)"},
	// 	"34":{"name" : " Saraswati Music College"},
	// 	"35":{"name" : " Gandharva Mahavidhalaya"},
	// 	"36":{"name" : " Tecnia Institute Of Dance, Music & Fine Arts"},
	// 	"37":{"name" : " Indian Film and Television Institute - Meerut"},
	// 	"38":{"name" : " Sangit Niketan (Indira Kala Sangit Vishwavidyalaya Ballimaran)"},
	// 	"39":{"name" : " Swaranjali School of Music & Dance"},
	// 	"40":{"name" : "  Delhi School of Music"},
	// 	"41":{"name" : " Indian Film and Television Institute - Meerut"},
	// 	"42":{"name" : " Shriram Bharatiya Kala Kendra"},
	// 	"43":{"name" : " School of Symphony"},
	// 	"44":{"name" : " Capital College of fine Arts, New Delhi "},
	// 	"45":{"name" : " Indian Institute of Technology, Delhi"},
	// 	"46":{"name" : " Delhi Technological University, Delhi"},
	// 	"47":{"name" : " Indira Gandhi Delhi Technical University for Women, Delhi"},
	// 	"48":{"name" : " Amity University"},
	// 	"49":{"name" : " Ashoka University"},
	// 	"50":{"name" : " Netaji Subhas Institute of Technology, Delhi"},
	// 	"51":{"name" : " Jaypee institute of technology"},
	// 	"52":{"name" : " Sharda University"},
	// 	"53":{"name" : " Shiv Nadar University"},
	// 	"54":{"name" : " Lovely Professional University"},
	// 	"55":{"name" : " BML Munjal University"},
	// 	"56":{"name" : " GD Goenka University"},
	// 	"57":{"name" : " K.R. Mangalam University"},
	// 	"58":{"name" : " Guru Gobind Singh Indraprastha University"},
	// 	"59":{"name" : " Pearl Academy "},
	// 	"60":{"name" : " Jawaharlal Nehru University (JNU)"},
	// 	"61":{"name" : " NOIDA International University"},
	// 	"62":{"name" : "Gateway College of Architecture"}
	// ]
	$scope.colleges = [
		{
			"name" : "St. Stephens College",
			"views":0
		},
		{
			"name" : "Lady Shri Ram College For Women",
			"views":0
		},
		{
			"name" : "Hindu College",
			"views":0
		},
		{
			"name" : "Miranda House",
			"views":0
		},
		{
			"name" : "Hansraj College",
			"views":0
		},
		{
			"name" : "Ramjas College",
			"views":0
		},
		{
			"name" : "Shri Ram College of Commerce",
			"views":0
		},
		{
			"name" : "Indraprastha College For Women ",
			"views":0
		},
		{
			"name" : "Sri Venkateswara College ",
			"views":0
		},
		{
			"name" : "Jesus & Mary College",
			"views":0
		},
		{
			"name" : "Gargi College",
			"views":0
		},
		{
			"name" : "Acharya Narendra Dev College",
			"views":0
		},
		{
			"name" : "Deen Dayal Upadhyay College",
			"views":0
		},
		{
			"name" : "SGTB Khalsa College",
			"views":0
		},
		{
			"name" : "Sri Guru Gobind Singh College of Commerce",
			"views":0
		},
		{
			"name" : "Shaheed Bhagat Singh College",
			"views":0
		},
		{
			"name" : "Kirori Mal College",
			"views":0
		},
		{
			"name" : "Daulat Ram College",
			"views":0
		},
		{
			"name" : "Sri Aurobindo College ",
			"views":0
		},
		{
			"name" : "Kamala Nehru College",
			"views":0
		},
		{
			"name" : "Shaheed Sukhdev College of Business Studies",
			"views":0
		},
		{
			"name" : "Delhi College of Arts & Commerce",
			"views":0
		},
		{
			"name" : "Dayal SIngh College",
			"views":0
		},
		{
			"name" : "Kirori Mal College",
			"views":0
		},
		{
			"name" : "Motilal College",
			"views":0
		},
		{
			"name" : "Sri Guru Nanak Dev Khalsa College",
			"views":0
		},
		{
			"name" : "P.G.D.A.V. College",
			"views":0
		},
		{
			"name" : "Lakshmibai College",
			"views":0
		},
		{
			"name" : "Lady Irwin College",
			"views":0
		},
		{
			"name" : "Vivekananda College",
			"views":0
		},
		{
			"name" : "College of Vocational Studies",
			"views":0
		},
		{
			"name" : "Maharaja Agrasen College ",
			"views":0
		},
		{
			"name" : "Delhi College of Arts and Commerce (DCAC)",
			"views":0
		},
		{
			"name" : "Saraswati Music College",
			"views":0
		},
		{
			"name" : "Gandharva Mahavidhalaya",
			"views":0
		},
		{
			"name" : "Tecnia Institute Of Dance, Music & Fine Arts",
			"views":0
		},
		{
			"name" : "Indian Film and Television Institute - Meerut",
			"views":0
		},
		{
			"name" : "Sangit Niketan (Indira Kala Sangit Vishwavidyalaya Ballimaran)",
			"views":0
		},
		{
			"name" : "Swaranjali School of Music & Dance",
			"views":0
		},
		{
			"name" : "Delhi School of Music",
			"views":0
		},
		{
			"name" : "Indian Film and Television Institute - Meerut",
			"views":0
		},
		{
			"name" : "Shriram Bharatiya Kala Kendra",
			"views":0
		},
		{
			"name" : "School of Symphony",
			"views":0
		},
		{
			"name" : "Capital College of fine Arts, New Delhi ",
			"views":0
		},
		{
			"name" : "Indian Institute of Technology, Delhi",
			"views":0
		},
		{
			"name" : "Delhi Technological University, Delhi",
			"views":0
		},
		{
			"name" : "Indira Gandhi Delhi Technical University for Women, Delhi",
			"views":0
		},
		{
			"name" : "Amity University",
			"views":0
		},
		{
			"name" : "Ashoka University",
			"views":0
		},
		{
			"name" : "Netaji Subhas Institute of Technology, Delhi",
			"views":0
		},
		{
			"name" : "Jaypee institute of technology",
			"views":0
		},
		{
			"name" : "Sharda University",
			"views":0
		},
		{
			"name" : "Shiv Nadar University",
			"views":0
		},
		{
			"name" : "Lovely Professional University",
			"views":0
		},
		{
			"name" : "BML Munjal University",
			"views":0
		},
		{
			"name" : "GD Goenka University",
			"views":0
		},
		{
			"name" : "K.R. Mangalam University",
			"views":0
		},
		{
			"name" : "Guru Gobind Singh Indraprastha University",
			"views":0
		},
		{
			"name" : "Pearl Academy ",
			"views":0
		},
		{
			"name" : "Jawaharlal Nehru University (JNU)",
			"views":0
		},
		{
			"name" : "NOIDA International University",
			"views":0
		},
		{
			"name" : "Gateway College of Architecture",
			"views":0
		},
		{
			"name":"Birla Institute of Technology and Sciences,Pilani, Pilani Campus",
			"view":0
		}
	]
	$scope.currentArtist = null;

	$scope.setArtist = function(code){
		$scope.currentArtist = $scope.artists[code];
	}

	$scope.currentCeleb = null;

	$scope.setCeleb = function(code){
		$scope.currentCeleb = $scope.celebs[code];
	}
});
