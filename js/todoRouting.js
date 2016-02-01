/**
 * Routing in "TO DO Application" 
 */
var toDoAppModule = angular.module('toDoApp', [
  'ngRoute',
  'toDoAppControllers',
  'toDoAppFilters'
]);

toDoAppModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/employee', {
        templateUrl: 'partials/todo.html',
        controller: 'employeeCtrl'
      }).
      when('/manager', {
        templateUrl: 'partials/todo.html',
        controller: 'managerCtrl'
      }).
      otherwise({
        redirectTo: '/employee'
      });
  }]);
