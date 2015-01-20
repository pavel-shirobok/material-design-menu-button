angular.module('MdButtonTest', []).
    config(function($logProvider){
        $logProvider.debugEnabled(true);
    }).
    directive('mdMenuButton', function(){
        return {
            templateUrl : 'js/simpleMdButton.html',
            replace: true,
            scope : {
                size : '@'
            },
            controller : 'MdButtonController'
        }
    }).
    directive('mdMenuButtonX', function(){
        return {
            templateUrl : 'js/complexMdButton.html',
            replace: true,
            scope : {
                size : '@'
            },
            controller : 'MdButtonController'
        }
    }).
    controller('MdButtonController', function($scope, $element){
        $scope.$watch('size', function(){
            $element.css('font-size', $scope.size);
        });
    }).
    controller('SizeController', function($scope){
        $scope.sizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        $scope.currentSize = 10;
        $scope.select = function(s){
            $scope.currentSize = s;
        };
    });