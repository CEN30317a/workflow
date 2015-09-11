// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.completed = [false, false];
  $scope.newItem = "";
  $scope.total = 2;


  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
      $scope.total += 1;
    }
  }

  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.total -= 1;
  }

    $scope.isComplete = function(item){
    var index = $scope.todos.indexOf(item);
    if ($scope.completed[index]) {
      return "btn-success";
    } else {
      return "btn-default";
    }

    $scope.toggleDone = function(item){
    var index = $scope.todos.indexOf(item);
    $scope.completed[index] = !$scope.completed[index];
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
