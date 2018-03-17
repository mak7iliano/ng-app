app.factory('teamFactory', ['$http', '$routeParams', function ($http, $routeParams) {
    var service = {};

    service.getTeam = function () {
        return $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then(function successCallback(response) {
            return response.data;
        }, function errorCallback(response) {
            console.log('error');
        });
    };

    service.getUser = function () {
        return $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users/' + $routeParams.id
        }).then(function successCallback(response) {
            return response.data;
        }, function errorCallback(response) {
            console.log('error');
        });
    };

    return service;
}]);