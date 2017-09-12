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
        // profile['profile_pic'] = $('#profile_pic').val();
        // profile['referred_by'] = $('#reffered_by').val();
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
            url:'https://starconnect.org.in/connect/api/register/',
            data:data,
        }).then(function successCallback(response){
            alert(response.data['message'])
            console.log("Form successfully submited!");
        }, function errorCallback(response) {
            alert(response.data['message']);
        });
    })
})
})