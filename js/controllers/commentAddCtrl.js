app.controller('commetAddCtrl', function($scope, $rootScope, commentFactory){  
    if ($rootScope.authUser) {
        $scope.rootCommentAuthor = $rootScope.authUser;
        $scope.commentAuthor = $rootScope.authUser;
    }

    $scope.postSuccess = false;     
    $scope.addComment = function(isValid) {
        $scope.submitted = true;        
        if (isValid) {
            $scope.submitted = false;
            commentFactory.postComment($scope.commentAuthor, $scope.commentText, $scope.blogId)
            .then(function(data) {
                if (data.status == 200) {   
                    $scope.commentAuthor = '';
                    $scope.commentText = '';
                    $scope.postSuccess = true;   
                    $rootScope.$broadcast('commentAdded', true);                 

                    setTimeout(function(){
                        $scope.postSuccess = false;                        
                        $scope.$apply();                        
                    }, 2000);
                }
            }); 
        }        
    }    
});