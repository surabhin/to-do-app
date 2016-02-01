/**
 * Filters in "To Do Application"
 */
var toDoFilterModule = angular.module('toDoAppFilters', [
]);

/* Custom 'filterTasks' Filter to display results based on task status */
toDoFilterModule.filter('filterTasks', [function () {
    return function (tasks, taskProgress) {
        if (!angular.isUndefined(tasks) && !angular.isUndefined(taskProgress) && taskProgress != 'all') {
            var filteredTasks = [];
            var filteredTaskStatus = false;
            if(taskProgress == 'completed'	){
            	filteredTaskStatus = true;
            } 
            angular.forEach(tasks, function (task) {
                if (task.taskStatus == filteredTaskStatus) {
                    filteredTasks.push(task);
                }
            });
            return filteredTasks;
        } else {
            return tasks;
        }
    };
}]);
