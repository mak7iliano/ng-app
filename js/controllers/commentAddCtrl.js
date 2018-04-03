app.controller('commetAddCtrl', function($scope, $rootScope, commentFactory){ 
    let apiTokken = $rootScope.defaultTokken;

    $scope.allowAddComment = false;

    if ($rootScope.authUser) {
        $scope.commentAuthor = $rootScope.authUser.name;
        apiTokken =  $rootScope.authUser.api_key

        if ($rootScope.authUser.group == 'visitor' || $rootScope.authUser.group == 'admin') {
            $scope.allowAddComment = true;
        }
    }

    $scope.postSuccess = false;     
    $scope.addComment = function(isValid) {
        $scope.submitted = true;        
        if (isValid) {            
            $scope.submitted = false;
            commentFactory.postComment(apiTokken, $scope.commentAuthor, $scope.commentText, $scope.blogId)
            .then(function(data) {
                if (data.status == 200) {   
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