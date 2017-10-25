
app.controller("artistController",function($scope,$rootScope,$http,$sce,$routeParams,$window){
    $scope.currentArtist = {};
    $scope.url = '';
    var videourl;
    $scope.likeVideo;
	(function(){
		var p = document.createElement('script');
		p.type = 'text/javascript';
		p.async = true;
		p.src = 'https://apis.google.com/js/api.js?onload=handleClientLoad';

		var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(p, s);


	})();
			   /***** START BOILERPLATE CODE: Load client library, authorize user. *****/

  // Global variables for GoogleAuth object, auth status.
  var GoogleAuth;

  /**
   * Load the API's client and auth2 modules.
   * Call the initClient function after the modules load.
   */
  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  function initClient() {
    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes

    gapi.client.init({
        'clientId': '673271682426-v02ov7tgrtrofqiu00e7cect8bkkgsk5.apps.googleusercontent.com',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
        'scope': 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'
    }).then(function () {
    	console.log("gapi successCallback");
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      setSigninStatus();

      // Call handleAuthClick function when user clicks on "Authorize" button.
      $scope.likeVideo = function(){
      	console.log("clicked");
        handleAuthClick(event);
    }
    });
  }

  function handleAuthClick(event) {
    // Sign user in after click on auth button.
    GoogleAuth.signIn();
  }

  function setSigninStatus() {
    var user = GoogleAuth.currentUser.get();
    isAuthorized = user.hasGrantedScopes('https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner');
    // Toggle button text and displayed statement based on current auth status.
    if (isAuthorized) {
      defineRequest();
    }
  }

  function updateSigninStatus(isSignedIn) {
    setSigninStatus();
  }

  function createResource(properties) {
    var resource = {};
    var normalizedProps = properties;
    for (var p in properties) {
      var value = properties[p];
      if (p && p.substr(-2, 2) == '[]') {
        var adjustedName = p.replace('[]', '');
        if (value) {
          normalizedProps[adjustedName] = value.split(',');
        }
        delete normalizedProps[p];
      }
    }
    for (var p in normalizedProps) {
      // Leave properties that don't have values out of inserted resource.
      if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {
        var propArray = p.split('.');
        var ref = resource;
        for (var pa = 0; pa < propArray.length; pa++) {
          var key = propArray[pa];
          if (pa == propArray.length - 1) {
            ref[key] = normalizedProps[p];
          } else {
            ref = ref[key] = ref[key] || {};
          }
        }
      };
    }
    return resource;
  }

  function removeEmptyParams(params) {
    for (var p in params) {
      if (!params[p] || params[p] == 'undefined') {
        delete params[p];
      }
    }
    return params;
  }

  function executeRequest(request) {
    request.execute(function(response) {
      console.log(response);
    });
  }

  function buildApiRequest(requestMethod, path, params, properties) {
    params = removeEmptyParams(params);
    var request;
    if (properties) {
      var resource = createResource(properties);
      request = gapi.client.request({
          'body': resource,
          'method': requestMethod,
          'path': path,
          'params': params
      });
    } else {
      request = gapi.client.request({
          'method': requestMethod,
          'path': path,
          'params': params
      });
    }
    executeRequest(request);
  }
    $scope.init = function(){
    $scope.currentArtist = $rootScope.artists[$routeParams.artistCode];    
	var videourl = $scope.currentArtist.connects[0]['upload_link'].slice(32);
  	if(videourl.indexOf('&') != -1){
  		videourl = videourl.substr(0,videourl.indexOf('&'));
  	}
    	console.log($rootScope.artists,$scope.currentArtist);
        $scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+videourl);
		// console.log("Youtube loaded!")
    }
    if(Object.keys($rootScope.artists).length == 0){
    	$http({
		method:'GET',
		url:'https://starconnect.org.in/connect/api/get_dashboard/'
		}).then(function successCallback(response){
			$rootScope.artists = response.data['artists'];
			$scope.cas = response.data['ambassadors'];
			$scope.init();
			// artistsforvids = $scope.artists;
	 
	       });
    }else{
    	$scope.init();
    }

   
  function videosRate(params) {
  params = removeEmptyParams(params); // See full sample for function
  var request = gapi.client.youtube.videos.rate(params);
  executeRequest(request);
}


function defineRequest() {
   	videosRate({'id': videourl,
             'rating': 'like'});
}

});
