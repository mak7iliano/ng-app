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
        .when('/time', {
            templateUrl: "time.html",
            controller: "timeCtrl"
        });
});

app.controller('bodyCtrl', function($scope){
    $scope.loading = false;

    $scope.$on('appLoading', function (event, data) {
        if (data) {
            $scope.loading = true;
        } else {
            $scope.loading = false;
        }
    });
});

app.controller('Navigation', function($scope){
    $scope.setActive = function(what) {
        $scope.homeActive = "";
        $scope.todoActive = "";
        $scope.teamActive = "";
        $scope.timeActive = "";
        $scope[what+"Active"] = "selected";
    }
});