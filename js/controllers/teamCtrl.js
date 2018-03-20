app.controller('teamCtrl', function($scope, teamFactory){
    $scope.title = "Team";
    $scope.setActive("team");
    $scope.isList = true;

    $scope.$emit('appLoading', true);

    $scope.viewType = function(type) {
        if (type === 'list') {
            $scope.isList = true;
        } else {
            $scope.isList = false;
        }
    }

    teamFactory.getTeam().then(function(data){
        $scope.team = data;
        $scope.$emit('appLoading', false);
    });
});

app.controller('teamViewCtrl', function($scope, teamFactory){
    $scope.title = "Team view";
    $scope.setActive("team");
    $scope.$emit('appLoading', true);

    teamFactory.getUser().then(function(data){
        $scope.user = data;
        $scope.$emit('appLoading', false);
    });
});