app.factory('authFactory', ['$http',  function ($http) {
    var service = {};

    service.authCHeck = function (authUser, authPassword) {
        return $http.post(
            'http://api.ki-kot.com/api/cockpit/authUser?token=account-6583d0d8458ea861c4715c804d8dd2', 
            {                 
                "user": authUser,
                "password": authPassword            
            }
        );
    };  

    return service;
}]);