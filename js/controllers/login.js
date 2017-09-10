app.controller("loginController", function ($scope, $http) {
    $('#login').click(function(){
        var data = {};
        var a = $('#login_form').serializeArray();
        $.each(a,function(i,key){
            data[key.name] = key.value;
        })

        $http({
            method:'POST',
            url:'',
            data:data
        }).then(function successCallback(data,status,headers,config){
            $window.sessionStorage.token = data.token;
            $scope.message = 'Welcome';            
        }, function errorCallback(data,status,headers,config) {
            delete $window.sessionStorage.token;
            $scope.message = 'Error: Invalid user or password';        
        });
    })

});

app.factory('authInterceptor', function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
      }
      return response || $q.when(response);
    }
  };
app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});

});

