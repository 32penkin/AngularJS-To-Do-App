angular.module('todoApp.controller', [])
  .controller('todoController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.tempInput = '';
    $scope.tasksArray = [];
    $scope.show = '';
    $scope.addNew = function () {
      if ($scope.tempInput.trim()) {
        $scope.tasksArray.push({value: $scope.tempInput, checked: false, edit: false});
        $scope.tempInput = '';
      }
    };
    $scope.editTask = function (item) {
      let index = $scope.tasksArray.indexOf(item);
      $scope.tasksArray[index].edit = !$scope.tasksArray[index].edit;
    };
    $scope.deleteTask = function (item) {
      let index = $scope.tasksArray.indexOf(item);
      $scope.tasksArray.splice(index, 1);
    };
    $scope.showFn = function (item) {
      if ($scope.show === 'All' || $scope.show === '') {
        return true;
      } else if (item.checked && $scope.show === 'Completed') {
        return true;
      } else if (!item.checked && $scope.show === 'Active') {
        return true;
      } else {
        return false;
      }
    };
    $scope.clearCompleted = function (item) {
      $scope.tasksArray = $scope.tasksArray.filter(item => !item.checked);
    };
  }]);