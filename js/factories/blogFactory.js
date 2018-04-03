app.factory('blogFactory', ['$http', '$routeParams',  function ($http, $routeParams) {
    var service = {};

    service.getList = function (apiTokken) {
        return $http({
            method: 'GET',
            url: 'http://api.ki-kot.com/api/collections/get/blog?token=' + apiTokken
        }).then(function successCallback(response) {
            return response.data.entries;
        }, function errorCallback(response) {
            console.log('error');
        });
    };   
    
    service.getBlog = function (apiTokken) {
        return $http({
            method: 'GET',
            url: 'http://api.ki-kot.com/api/collections/get/blog?token=' + apiTokken + '&filter[_id]='+$routeParams.id,
        }).then(function successCallback(response) {
            return response.data.entries;
        }, function errorCallback(response) {
            console.log('error');
        });
    };  

    return service;
}]);