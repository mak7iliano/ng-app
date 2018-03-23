app.controller('authCtrl', function($scope, $rootScope, authFactory){    
    $scope.authFormActive = false;
    $scope.authFormError = false;
    $scope.authFormToggle = function() {
        $scope.authFormActive = !$scope.authFormActive;
    }
    $scope.loginUserName = $rootScope.authUser; 
     
    $scope.authSend = function(isValid) {
        $scope.submitted = true;
        $scope.authFormError = false;   

        if (isValid) {
            $scope.submitted = false; 
            authFactory.authCHeck($scope.authUser, $scope.authPassword)
            .then(function(data) {
                if (data.status == 200) {
                    $scope.authFormError = false; 
                    localStorage.setItem('authUser', $scope.authUser);
                    $scope.loginUserName = $scope.authUser;
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