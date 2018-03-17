var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "home.html",
            controller: "homeCtrl"
        })
        .when('/todo', {
            templateUrl: "todo.html",
            controller: "todoCtrl"
        })
        .when('/team', {
            templateUrl: "team.html",
            controller: "teamCtrl"
        })
        .when('/team/:id', {
            templateUrl: "team-view.html",
            controller: "teamViewCtrl"
        })

});

app.controller('Navigation', function($scope){
    $scope.setActive = function(what) {
        $scope.homeActive = "";
        $scope.todoActive = "";
        $scope.teamActive = "";
        $scope[what+"Active"] = "selected";
    }
});
