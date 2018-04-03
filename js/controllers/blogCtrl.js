app.controller('blogCtrl', function($scope, $rootScope, blogFactory){    
    $scope.title = "Blog";
    $scope.setActive("blog");
    $scope.$emit('appLoading', true);    

    let apiTokken = $rootScope.defaultTokken;
    blogFactory.getList(apiTokken).then(function(data){
        $scope.blogList = data;
        $scope.$emit('appLoading', false);
    });
});

app.controller('blogViewCtrl', function($scope, $rootScope, blogFactory){    
    $scope.title = "Blog";
    $scope.setActive("blog");
    $scope.$emit('appLoading', true);

    let apiTokken = $rootScope.defaultTokken;
    blogFactory.getBlog(apiTokken).then(function(data){
        $scope.blogData = data[0];
        $scope.$emit('appLoading', false);
    });
});

app.filter('stripTags', function() {
    return function(text) {
      return  angular.element(text).text();
    };
});

app.filter('unsafe', function($sce) {    
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});    