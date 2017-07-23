app.controller("artistController",function($scope,$routeParams){
	 $scope.currentArtist = $scope.artists[$routeParams.artistCode];
			
	// $scope.artists["1"].video=$sce.trustAsResourceUrl("https://www.youtube.com/embed/ncgRnjc940g");
	// // var tag = document.createElement('script');
	// tag.src = "https://www.youtube.com/iframe_api";
	// var firstScriptTag = document.getElementsByTagName('script')[0];
	// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// var player;

	// function onYouTubeIframeAPIReady(){
	// 	player = new YT.Player('player',{
	// 		events : {
	// 			'onReady' : onPlayerReady
	// 		}
	// 	})
	// }

	// function onPlayerReady(e){
	// 	console.log("youtube player is ready");
	// }
});