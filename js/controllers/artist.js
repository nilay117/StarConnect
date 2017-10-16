
app.controller("artistController",function($scope,$sce,$routeParams,$window){
    $scope.currentArtist = $scope.artists[$routeParams.artistCode];    
  //   var tag = document.createElement('script');

		// tag.src = "https://www.youtube.com/iframe_api";
  //       var firstScriptTag = document.getElementsByTagName('script')[0];
  //       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  console.log($scope.currentArtist.connects[0]['upload_link'],$scope.currentArtist.connects[0]['upload_link'].slice(32));
        $scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+$scope.currentArtist.connects[0]['upload_link'].slice(32));
		console.log("Youtube loaded!")
	     //  This function creates an <iframe> (and YouTube player)
    	  //    after the API code downloads.
	// jQuery(document).ready(function(){
 //        var player;
 //        function onYouTubeIframeAPIReady() {
 //        	console.log(1);
 //            player = new YT.Player("player", {
 //                height: '390',
 //                width: '640',
 //                videoId: 'X_5_BLt76c0',
 //                origin:"https://www.example.com",
 //                events: {
 //                    'onReady': onPlayerReady
 //                }
 //            }); 

 //   //        $.each(artistsforvids,function(i,key){
 //   //        	console.log(i,key);
 //   //          var id = key.id;
	// 		// console.log(key,id);
 //   //          var video_id = key.connects[0]['upload_link'].slice(32);
 //   //        })
 //      	}

 //      	function onPlayerReady(event) {
 //        event.target.playVideo();
 //      }
	// });
});
