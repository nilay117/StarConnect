app.controller("caController", function ($scope, $http) {
	$('#ca_btn').click(function(){
        var data = {};
        var a = $('#ca_form').serializeArray();
        $.each(a,function(i,key){
            data[key.name] = key.value;
        })
        $http({
            method:'POST',
            url:'https://starconnect.org.in/api/campusambassadors/',
            data:data,
            headers: {
            	'content-type':'application/json'
            }
        }).then(function successCallback(response){
        	alert(response.message)
        })
})