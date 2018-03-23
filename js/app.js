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
        })
        .when('/blog', {
            templateUrl: "blog.html",
            controller: "blogCtrl"
        })
        .when('/blog/:id', {
            templateUrl: "blog-view.html",
            controller: "blogViewCtrl"
        });
});

app.controller('bodyCtrl', function($scope, $rootScope){
    $scope.loading = false;

    $scope.$on('appLoading', function (event, data) {
        $scope.loading = data;
    });

    if (localStorage.getItem('authUser')) {
        $rootScope.authUser = localStorage.getItem('authUser');
    }
});

app.controller('Navigation', function($scope){
    $scope.setActive = function(what) {
        $scope.homeActive = "";
        $scope.todoActive = "";
        $scope.teamActive = "";
        $scope.timeActive = "";
        $scope.blogActive = "";
        $scope[what+"Active"] = "selected";
    }
});