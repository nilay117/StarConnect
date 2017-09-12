app.controller("loginController", function ($scope, $http, $window) {
    console.log($window.sessionStorage.token)
    $('#login').click(function(){
        var data = {};
        var a = $('#login_form').serializeArray();
        $.each(a,function(i,key){
            data[key.name] = key.value;
        })
        $window.sessionStorage.username = $('#login_username').val();
        $window.sessionStorage.password = $('#login_password').val();
        $http({
            method:'POST',
            url:'https://starconnect.org.in/connect/api/api_token',
            data:data
        }).then(function successCallback(response){
            $window.sessionStorage.token = response.data['token'];
            $scope.message = 'Welcome';   
            console.log($scope.message)
            $window.location.href = '/';
        }, function errorCallback(response) {
            delete $window.sessionStorage.token;
            $scope.message = 'Error: Invalid user or password';
            console.log($scope.message)                 
        });
    })  

});

// app.factory('authInterceptor', function ($rootScope, $q, $window) {
//   return {
//     request: function (config) {
//       config.headers = config.headers || {};
//       if ($window.sessionStorage.token) {
//         config.headers.Authorization = 'JWT ' + $window.sessionStorage.token;
//       }
//       return config;
//     },
//     response: function (response) {
//       if (response.status === 401) {
//         // handle the case where the user is not authenticated
//       }
//       return response || $q.when(response);
//     }
//   };
// app.config(function ($httpProvider) {
//   $httpProvider.interceptors.push('authInterceptor');
// });

// });

