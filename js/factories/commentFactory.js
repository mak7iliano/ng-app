app.factory('commentFactory', ['$http',  function ($http) {
    var service = {};

    service.getList = function () {
        return $http({
            method: 'GET',
            url: 'http://api.ki-kot.com/api/collections/get/comments?token=account-6583d0d8458ea861c4715c804d8dd2'
        }).then(function successCallback(response) {
            return response.data.entries;
        }, function errorCallback(response) {
            console.log('error');
        });
    };  
    
    service.postComment = function (commentAuthor, commentText, blogId) {
        return $http.post(
            'http://api.ki-kot.com/api/collections/save/comments?token=account-6583d0d8458ea861c4715c804d8dd2', 
            {                 
                data: {
                    "author": commentAuthor,
                    "comment": commentText,
                    "blogId": blogId,
                    "dateCreate": new Date()
                }             
            }
        );
    };  

    return service;
}]);