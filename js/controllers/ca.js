app.controller("formController", function ($scope, $http) {
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
            	'content-type':'application/x-www-form-urlencoded'
            }
        }).then(function successCallback(response){

        })
})