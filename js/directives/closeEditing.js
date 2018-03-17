app.directive('closeEditing', function (){
    return {
        restrict: 'A',
        scope: {
            isEditing: '='
        },
        link: function(scope, element, attrs) {
            element.on('keyup', function(e){
               if (e.keyCode == 27) {
                   scope.isEditing = false;
                   scope.$apply();
               }
            });
        }
    };
});