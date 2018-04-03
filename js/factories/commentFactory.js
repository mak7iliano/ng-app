app.factory('commentFactory', ['$http',  function ($http) {
    var service = {};

    service.getList = function (apiTokken) {
        return $http({
            method: 'GET',
            url: 'http://api.ki-kot.com/api/collections/get/comments?token=' + apiTokken
        }).then(function successCallback(response) {
            return response.data.entries;
        }, function errorCallback(response) {
            console.log('error');
        });
    };  
    
    service.postComment = function (apiTokken, commentAuthor, commentText, blogId) {
        return $http.post(
            'http://api.ki-kot.com/api/collections/save/comments?token=' + apiTokken, 
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