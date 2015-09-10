// Code goes here

var myApp = angular.module('app', []);



myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.priorities = ["Tomorrow", "Wednesday"];
  $scope.newPriority = "";
  $scope.newItem = "";
  $scope.total = 2;

  $scope.addItem = function(){
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      if ($scope.newPriority && $scope.newPriority !== ""){
        $scope.priorities.push($scope.newPriority);
      } else {
        $scope.priorities.push("");
      }
      $scope.newPriority = "";
      $scope.newItem = "";
      $scope.total += 1;
    }
  }

  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.priorities.splice(index, 1);
    $scope.total -= 1;
  }
  
  $scope.getPriority = function(item){
    var index = $scope.todos.indexOf(item);
    return $scope.priorities[index];
  }

  $scope.saveItem = function(item, savedItem, savedDate){
    var index = $scope.todos.indexOf(item);
    if (savedItem && savedItem != ""){
      $scope.todos[index] = savedItem;
    }
    if (savedDate && savedDate != "") {
      $scope.priorities[index] = savedDate;
    }
  }
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 *
 * *********************/
