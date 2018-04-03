app.controller('commetsCtrl', function($scope, $rootScope, commentFactory){     
    let getComments = function() {
        $scope.$emit('appLoading', true);
        let apiTokken = $rootScope.defaultTokken;
        commentFactory.getList(apiTokken).then(function(data){
            $scope.commentstList = data;
            $scope.$emit('appLoading', false);
        });
    }

    getComments();

    $scope.$on('commentAdded', function (event, args) {
        getComments(); 
    });
});