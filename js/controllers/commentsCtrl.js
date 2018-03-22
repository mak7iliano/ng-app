app.controller('commetsCtrl', function($scope, commentFactory){    
    $scope.$emit('appLoading', true);   

    commentFactory.getList().then(function(data){
        $scope.commentstList = data;
        $scope.$emit('appLoading', false);
    });
});