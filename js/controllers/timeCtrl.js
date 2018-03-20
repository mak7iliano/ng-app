app.controller('timeCtrl', function($scope){    
    $scope.titleTimer = "Timer";
    $scope.titleCountdown = "Countdown";
    $scope.setActive("time");
});

app.controller('timerCtrl', function($scope, $filter){       
    $scope.results = [];

    $scope.isPaused = true;

    $scope.min = 0;
    $scope.sec = 0;
    $scope.msec = 0;

    $scope.startTimer = function () {
        $scope.isPaused = false;
        $scope.timer();
    }
    
    $scope.stopTimer = function () {
        $scope.isPaused = true;
    }
    
    $scope.addCircle = function () {
        let circleResult = $filter('timeFilter')($scope.min)+':'+$filter('timeFilter')($scope.sec)+','+$filter('timeFilter')($scope.msec);
        $scope.results.push(circleResult);
    }

    $scope.clearTimer = function () {
        $scope.min = 0;
        $scope.sec = 0;
        $scope.msec = 0;
        $scope.results = [];
    }

    $scope.timer = function() {        
        if (!$scope.isPaused) {
            setTimeout(function() {           
                $scope.msec++;
                if ($scope.msec == 60) {
                    $scope.msec = 0;
                    $scope.sec++;
                }
                if ($scope.sec == 60) {
                    $scope.sec = 0;
                    $scope.min++;
                }
                $scope.timer();
                $scope.$apply();
            }, 16.666);
        }        
    }
});

app.controller('countdownCtrl', function($scope){    
    $scope.date = 0;
    $scope.hour = 0;
    $scope.min = 0;
    $scope.sec = 0;

    $scope.isPaused = true;
    $scope.isFinnished = false;

    $scope.targetDate = '';

    $scope.startCountdown = function() {
        $scope.isPaused = false;
        let currentDate = new Date();
        let timeDiff = Math.abs($scope.targetDate.getTime() - currentDate.getTime());
        let remainsDate = new Date(timeDiff); 

        let remainsSec = (parseInt(remainsDate / 1000));
        let remainsFullDays = (parseInt(remainsSec / (24 * 60 * 60)));
        let secInLastDay = remainsSec - remainsFullDays * 24 * 3600;
        let remainsFullHours = (parseInt(secInLastDay / 3600));
        let secInLastHour = secInLastDay - remainsFullHours * 3600;
        let remainsMinutes = (parseInt(secInLastHour / 60));
        let lastSec = secInLastHour - remainsMinutes * 60;

        $scope.date = remainsFullDays;
        $scope.hour = remainsFullHours;
        $scope.min = remainsMinutes
        $scope.sec = lastSec;

        $scope.countdown();
        $scope.isFinnished = false;
    }

    $scope.stopCountdown = function() {
        $scope.isPaused = true;
    }

    $scope.countdown = function() {
        if (!$scope.isPaused) {
            setTimeout(function() {            
                $scope.sec --
    
                if ($scope.sec == -1 && $scope.min != 0) {
                    $scope.sec = 59;
                    $scope.min--
                }
                if ($scope.min == -1 && $scope.hour != 0) {
                    $scope.min = 59;
                    $scope.hour--
                }
                
                if ($scope.hour == -1 && $scope.date != 0) {
                    $scope.hour = 23;
                    $scope.date--
                }
    
                if ($scope.sec == 0 && $scope.min == 0 && $scope.hour == 0 && $scope.date == 0) {
                    $scope.isPaused = true;
                    $scope.isFinnished = true;
                }
    
                $scope.countdown();
                $scope.$apply();
            }, 1000);
        }     
    }
});

app.filter('timeFilter', function(){
    return function(input) {
        if (input < 10) {
            return input = '0'+input;
        } else {
            return input;
        }
    }
});