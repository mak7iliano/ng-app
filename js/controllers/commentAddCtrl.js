app.controller('commetAddCtrl', function($scope, commentFactory){    
    $scope.addComment = function() {
        commentFactory.postComment($scope.commentAuthor, $scope.commentText, $scope.blogId);
    }
});