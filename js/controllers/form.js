app.controller("formController", function ($scope, $http) {
$(document).ready(function(){
    // var fd="";
    // $scope.uploadFile = function(files) {
    //        fd = new FormData();
    //         //Take the first selected file
    //         fd.append("file", files[0]);
    //     }

    $('#submit').click(function(e){
        var data = {};
        var profile = {};
        var csrf = '{{ csrf_token }}'
        profile['first_name'] = $('#first_name').val();
        profile['last_name'] = $('#last_name').val();
        profile['college'] = $('#college').val();
        profile['email'] = $('#email').val();

        if($("#phone_no").val() < 1000000000 || $('#phone_no').val() > 9999999999){
            alert("Phone Number is invalid!");
            return false;
        }
        profile['phone_no'] = $('#phone_no').val();
        if($('#reffered_by').isNaN()){
            alert("Refferal code invalid!");
        }
        var referred_by = $('#reffered_by').val();
        var initialdata = {"reffered_by":reffered_by};
        data['url']=$('#url').val();
        data['username']=$('#username').val();
        if($('#password').val() != $('#confirm_password').val()){
            alert("Password and Confirm Password aren't same!");
            return false;
        }
        data['password'] = $('#password').val();
        // profile['profile_pic'] = fd;
        data['profile'] = profile;
        console.log(data);
        var app = angular.module("starConnect",["ngRoute"]);
        app.config(['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        }]);
        $http({
            method:'POST',
            url:'https://starconnect.org.in/connect/api/get_ambassador_id',
            data:initialdata,
            headers:{
                'Content-Type':'application/json'
            }
        }).then(function successCallback(response){
            var id = response.data['reffered_by'];
            console.log(id);
            data['reffered_by'] = id;
            console.log(data);
            $http({
            method:'POST',
            url:'https://starconnect.org.in/connect/api/register/',
            data:data,
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(function successCallback(response){
                alert(response.data['message'])
                console.log("Form successfully submited!");
            }, function errorCallback(response) {
                alert(response.data['message']);
            });
        })
        
    })
})
})