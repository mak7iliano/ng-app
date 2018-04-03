app.controller('registrationCtrl', function ($scope, $rootScope, registrationFactory){
    let apiTokken = $rootScope.defaultTokken;

    $scope.setActive("registration");
    $scope.registerSuccess = false;
    $scope.registerError = '';

    $scope.register = function(isValid) {
        $scope.submitted = true;        
        if (isValid) {            
            $scope.submitted = false; 
            $scope.registerError = '';
            
            registrationFactory.sendUser(apiTokken, $scope.name, $scope.email, $scope.password)
            .then(function(data) {
                console.log(data);
                if (data.status == 200) {   
                    $scope.registerSuccess = true;
                }
            })
            .catch(function(error) {
                $scope.registerError = error.data.error;
            }); 
        }        
    }    
});