
app.controller("artistController",function($scope,$routeParams,$window){
	
        jQuery(document).ready(function(){
		$scope.currentArtist = $scope.artists[$routeParams.artistCode];  
          //  This function creates an <iframe> (and YouTube player)
          //    after the API code downloads.
          var player;
          $window.onYouTubeIframeAPIReady = function() {
            console.log($scope.currentArtist,$scope.currentArtist.connects[0]['upload_link'],$scope.currentArtist.connects[0]['upload_link'].slice(32))
            player = new YT.Player('player', {
              height: '390',
              width: '640',
              videoId: $scope.currentArtist.connects[0]['upload_link'].slice(32),
              events: {
                'onReady': onPlayerReady
              }
            });
          }
          // 4. The API will call this function when the video player is ready.
          function onPlayerReady(event) {
            event.target.playVideo();
          }
        })

      
});
