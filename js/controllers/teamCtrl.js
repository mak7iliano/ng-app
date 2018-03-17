app.controller('teamCtrl', function($scope, teamFactory){
    $scope.title = "Team";
    $scope.setActive("team");
    $scope.loading = true;

    teamFactory.getTeam().then(function(data){
        $scope.team = data;
        $scope.loading = false;
    });
});

app.controller('teamViewCtrl', function($scope, teamFactory){
    $scope.title = "Team view";
    $scope.setActive("team");
    $scope.loading = true;

    teamFactory.getUser().then(function(data){
        $scope.user = data;
        $scope.loading = false;
    });
});