
app.controller("artistController",function($scope,$routeParams,$window){
		//This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        $scope.currentArtist = $scope.artists[$routeParams.artistCode];  
        jQuery(document).ready(function(){
          //  This function creates an <iframe> (and YouTube player)
          //    after the API code downloads.
          var player;
          $window.onYouTubeIframeAPIReady = function() {
            console.log($scope.currentArtist,$scope.currentArtist.connects[0]['upload_link'],$scope.currentArtist.connects[0]['upload_link'].slice(32))
            player = new YT.Player($scope.currentArtist.id, {
              height: '390',
              width: '640',
              videoId: $scope.currentArtist.connects[0]['upload_link'].slice(32),
              origin:"https://www.example.com",
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
