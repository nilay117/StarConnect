app.controller("formController", function ($scope, $http) {
    $scope.collegename = "bla";
$(document).ready(function(){
    // var fd="";
    // $scope.uploadFile = function(files) {
    //        fd = new FormData();
    //         //Take the first selected file
    //         fd.append("file", files[0]);
    //     }
    $scope.check = function(){
        if($('#college').val() == "other"){
            $('#college_other').removeAttr('disabled');
            $('#disabled-field').removeClass('low_opacity');
        }
        else{
            $('#college_other').attr('disabled',"true");
            $('#disabled-field').addClass('low_opacity');            
        }
    }
    $scope.thankyou_data;
    $('#submit').click(function(e){
        var data = {};
        var profile = {};
        var csrf = '{{ csrf_token }}'
        profile['first_name'] = $('#first_name').val();
        profile['last_name'] = $('#last_name').val();
        if($('#college').val() == "Other"){
            profile['college'] = $('#college_other').val()
        }
        else{
            profile['college'] = $('#college').val();
        }
        profile['email'] = $('#email').val();

        if($("#phone_no").val() < 1000000000 || $('#phone_no').val() > 9999999999){
            document.getElementById('alert-msg').innerHTML = "Phone Number is invalid!";
            document.getElementById('alert-wrapper').className = "";
            return false;
        }
        profile['phone_no'] = $('#phone_no').val();
        var referred_by = $('#referred_by').val();
        var initialdata = {"referred_by":referred_by};
        data['url']=$('#url').val();
        data['username']=$('#username').val();
        if($('#password').val() != $('#confirm_password').val()){
            document.getElementById('alert-msg').innerHTML = "Password and Confirm Password are not same!";
            document.getElementById('alert-wrapper').className = "";
            return false;
        }
        data['password'] = $('#password').val();
        profile['profile_pic'] = $('#profile_pic').files[0].getAsDataURL();
        $http({
            method:'POST',
            url:'https://starconnect.org.in/connect/api/get_ambassador_id/',
            data:initialdata,
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(function successCallback(response){
            var id = response.data['referred_by'];
            profile['referred_by'] = id;
        data['profile'] = profile;    
            $http({
            method:'POST',
            url:'https://starconnect.org.in/connect/api/register/',
            data:data,
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(function successCallback(response){
                $scope.thankyou_data = response.data['message'];
                $window.location.href = '/#/!success';
            }, function errorCallback(response) {
                document.getElementById('alert-msg').innerHTML = response.data['message'];
                document.getElementById('alert-wrapper').className = "";
            });
        })
        
    })
})
})