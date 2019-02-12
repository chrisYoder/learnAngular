const myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'simpleController',
            templateUrl: 'View1.html'
        })

        .when('/partial2', {
            controller: 'simpleController',
            templateUrl: 'View2.html'
        });
});

function simpleController($scope) {
    $scope.characters = [
        { name: 'Kaladin Stormblessed', country: 'Alethkar' },
        { name: 'Shallan Davar', country: 'Jah Keved' }
    ];
}


myApp.controller('simpleController', simpleController);

