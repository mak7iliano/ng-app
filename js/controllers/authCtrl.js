app.controller('authCtrl', function($scope, $rootScope, authFactory){    
    $scope.authFormActive = false;
    $scope.authFormError = false;
    $scope.authFormToggle = function() {
        $scope.authFormActive = !$scope.authFormActive;
    }    

    if ($rootScope.authUser) {
        $scope.loginUserName = $rootScope.authUser.name; 
        console.log($rootScope.authUser);
    }    
     
    $scope.authSend = function(isValid) {
        $scope.submitted = true;
        $scope.authFormError = false;   

        if (isValid) {
            $scope.submitted = false; 
            authFactory.authCHeck($scope.authUser, $scope.authPassword)
            .then(function(data) {                
                if (data.status == 200) {
                    $scope.authFormError = false; 
                    localStorage.setItem('authUser', JSON.stringify(data.data));
                    $rootScope.authUser = data.data;
                    $scope.loginUserName = data.data.name;
                }              
 
            }).catch(function(data){
                $scope.authFormError = true;
            }); 
        }        
    }

    $scope.logout = function() {
        localStorage.removeItem('authUser');
        $rootScope.authUser = '';
        $scope.loginUserName = '';
    }
});