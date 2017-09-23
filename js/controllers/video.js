app.controller("videoController",function($scope,$routeParams,$window,$http){
    //AJAX calls to get list of videos
    $http({
      method:'GET',
      url:'https://starconnect.org.in/connect/api/videos/'
    }).then(function successCallback(response){
      $scope.videos = response.data;
      console.log($scope.videos)
    })

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    //Function to add videos using YouTube API
    jQuery(document).ready(function(){
        angular.forEach($scope.videos,function(item){
      //  This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      
      var player;
      $window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player(item.connect['id'], {
          height: '150',
          width: '300',
          videoId: item.connect['upload_link'],
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
    })
    
});