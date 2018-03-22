app.factory('blogFactory', ['$http', '$routeParams',  function ($http, $routeParams) {
    var service = {};

    service.getList = function () {
        return $http({
            method: 'GET',
            url: 'http://api.ki-kot.com/api/collections/get/blog?token=account-6583d0d8458ea861c4715c804d8dd2'
        }).then(function successCallback(response) {
            return response.data.entries;
        }, function errorCallback(response) {
            console.log('error');
        });
    };   
    
    service.getBlog = function () {
        return $http({
            method: 'GET',
            url: 'http://api.ki-kot.com/api/collections/get/blog?token=account-6583d0d8458ea861c4715c804d8dd2&filter[_id]='+$routeParams.id,
        }).then(function successCallback(response) {
            return response.data.entries;
        }, function errorCallback(response) {
            console.log('error');
        });
    };  

    return service;
}]);