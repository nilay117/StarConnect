app.controller("videoController",function($scope,$routeParams,$window){
  $(document).ready(function(){
    //AJAX calls to get list of videos
    $http({
      method:'GET',
      url:'http://127.0.0.1:8000/api/get_videos/'
    }).then(function successCallback(response){
      console.log(response.data)
      $scope.videos = response.data['videos'];
      console.log($scope.videos)
    })

    //Function to add videos using YouTube API
    function videoplayer(index,id){
      //This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      console.log("Script loaded")
      //  This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      $(document).ready(function(){
      var player;
      $window.onYouTubeIframeAPIReady = function() {
        console.log("Ready")
        player = new YT.Player(index, {
          height: '150',
          width: '300',
          videoId: id,
          events: {
            'onReady': onPlayerReady
          }
        });
      }
      });
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }
    }
  });
});