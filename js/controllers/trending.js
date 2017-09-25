app.controller("trendingController", function ($scope, $http) {
	var left = 0;
	$scope.next = function(){
		// console.log(left);
		if(left == -300){
			jQuery('.next').removeClass('hover');
		}
		if(left >= -300){
			jQuery('.prev').addClass('hover');
			jQuery('.slide-card').css("left",left-100 + "%");
			left-=100;						
		}
	}
	$scope.prev = function(){
		// console.log(left);
		if(left == 100)
		{
			jQuery('.prev').removeClass('hover');
		}
		if(left < 0 ){
			jQuery('.next').addClass('hover');		
			jQuery('.slide-card').css("left",(left+100) + "%");
			left+=100;						
		}
	}
})