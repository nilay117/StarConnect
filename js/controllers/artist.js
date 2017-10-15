
app.controller("artistController",function($scope,$routeParams,$window){
    $scope.currentArtist = $scope.artists[$routeParams.artistCode];
    var artistsforvids;
	function onYoutubeLoadFunction(){
	     //  This function creates an <iframe> (and YouTube player)
    	  //    after the API code downloads.
        function onYouTubeIframeAPIReady() {
          $.each(artistsforvids,function(i,key){
            var player;
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
          // 4. The API will call this function when the video player is ready.
          function onPlayerReady(event) {
            event.target.playVideo();
          }
  	}
});
