/**
 * Controllers in "To Do Application"
 */
var toDoAppCntrl = angular.module('toDoAppControllers', [
]);

/* Controller used in "Emplyee View" */
toDoAppCntrl.controller('employeeCtrl', ['$scope', 
	function($scope){

		$scope.viewName = "New Employee - To Do List";

		var day1Tasks = [
		      {taskName : 'Fill required forms', taskStatus : true},
		      {taskName : 'Attend orientation', taskStatus : true},
		      {taskName : 'Meet Buddy and Manager', taskStatus : true},
		      {taskName : 'Explore!', taskStatus : false}	];

		var day2Tasks = [
		      {taskName : 'Prepare Imaginea Profile', taskStatus : false},
		      {taskName : 'Learn - Focus on strength and improve weakness', taskStatus : false}];

		$scope.dayTasks = 'noSelection';

		$scope.viewDayTasks = function(dayTasks){
			
		};

		$scope.toDoList = day1Tasks;

	}]);

/* Controller used in "Manager View" */
toDoAppCntrl.controller('managerCtrl', ['$scope', 
	function($scope){

		$scope.viewName = "Manager - To Do List";
		$scope.managerView = true;
		$scope.dayTasks = 'noSelection';

		$scope.toDoList = [
		      {taskName : 'Check new employee joining date', taskStatus : true},
		      {taskName: 'Check project status', taskStatus : true},
		      {taskName : 'Attend Live Meeting with clients', taskStatus : false},
		      {taskName : 'Relax!', taskStatus : false}	];

		$scope.addTask = function(newTask){
			if (!angular.isUndefined(newTask)){
				$scope.toDoList.push({taskName : newTask, taskStatus : false});	
			}
		};

	}]);
