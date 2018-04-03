app.factory('registrationFactory', ['$http',  function ($http) {
    var service = {};

    service.sendUser = function (apiTokken, name, email, password) {
        return $http.post(
            'http://api.ki-kot.com/api/cockpit/saveUser?token=account-6583d0d8458ea861c4715c804d8dd2', 
            {      
                user: {
                    "user": name,
                    "name": name,
                    "email": email,
                    "password": password,
                    "group": 'visitor'  
                }          
            }
        );
    };  

    return service;
}]);