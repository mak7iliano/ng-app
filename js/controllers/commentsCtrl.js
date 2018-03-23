app.controller('commetsCtrl', function($scope, commentFactory){        
    let getComments = function() {
        $scope.$emit('appLoading', true);
        commentFactory.getList().then(function(data){
            $scope.commentstList = data;
            $scope.$emit('appLoading', false);
        });
    }

    getComments();

    $scope.$on('commentAdded', function (event, args) {
        getComments(); 
    });
});