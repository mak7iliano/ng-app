app.directive('commentsList', function (){
    return {
        restrict: 'E',
        scope: {
            blogId: '='
        },
        templateUrl: './blocks/comments.html',
        controller: 'commetsCtrl'
    };
});

app.directive('commentForm', function (){
    return {
        restrict: 'E',
        scope: {
            blogId: '='
        },
        templateUrl: './blocks/commentAdd.html',
        controller: 'commetAddCtrl'
    };
});