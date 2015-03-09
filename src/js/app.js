/**
 * Created by Adam on 3/2/2015.
 */
var chapter3 = angular.module('chapter3', ['ngRoute', 'ui.bootstrap', 'hljs', 'ngSanitize']);

chapter3.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'driversEdPart1',
        templateUrl: 'views/drivers-ed-part1.html'
    }).when('/drivers-ed-part2', {
        controller: 'driversEdPart2',
        templateUrl: 'views/drivers-ed-part2.html'
    }) .when('/drivers-ed-explore', {
        controller: 'driversEdExplore',
        templateUrl: 'views/drivers-ed-explore.html'
    }).when('/drivers-ed-challenge', {
        controller: 'driversEdChallenge',
        templateUrl: 'views/drivers-ed-challenge.html'
    }).when('/lesson-one', {
        controller: 'lessonOneController',
        templateUrl: 'views/lesson-one.html'
    }).when('/lesson-two', {
        controller: 'lessonTwoController',
        templateUrl: 'views/lesson-two.html'
    }).when('/lesson-three', {
        controller: 'lessonThreeController',
        templateUrl: 'views/lesson-three.html'
    }).when('/lesson-four', {
        controller: 'lessonFourController',
        templateUrl: 'views/lesson-four.html'
    }).when('/lesson-five', {
        controller: 'lessonFiveController',
        templateUrl: 'views/lesson-five.html'
    }).when('/lesson-six', {
        controller: 'lessonSixController',
        templateUrl: 'views/lesson-six.html'
    }).when('/lesson-seven', {
        controller: 'lessonSevenController',
        templateUrl: 'views/lesson-seven.html'
    }).otherwise({ redirectTo: '/'});

}]);