
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $rootScope){
    $scope.firstName = 'John';
    $scope.lastName = 'Doe';
    $scope.names = [
        {name:'Jain',country:'Norway'},
        {name:'Hebe',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
    $scope.test = 'Hebe';
    $scope.quantity = 1;
    $scope.price = 5;
    $scope.fullName = function(){
        return $scope.firstName + ' ' + $scope.lastName
    };
    //$rootScope.lastName = 'Doe';
});

app.filter('reverse', function () {
    return function (text) {
        return text.split('').reverse().join('');
    }
});