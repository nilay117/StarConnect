app.controller("videoController",function($scope,$routeParams,$window,$http){
    //AJAX calls to get list of videos
    $http({
      method:'GET',
      url:'http://127.0.0.1:8000/api/videos/'
    }).then(function successCallback(response){
      $scope.videos = response.data;
      console.log($scope.videos)
    })

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      console.log("Script loaded")
    
    //Function to add videos using YouTube API
    jQuery(document).ready(function(){
        angular.forEach($scope.videos,function(item){
      //  This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      console.log(item.connect['id'],item.connect['upload_link'])
      
      var player;
      $window.onYouTubeIframeAPIReady = function() {
        console.log("Ready")
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