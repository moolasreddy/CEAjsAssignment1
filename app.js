(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

$scope.lunchItem = "";
$scope.message = "";
$scope.messageClass = "";

$scope.checkLunch = function() {
  var lunchItemsArray = $scope.lunchItem.split(',');
  var cleanArray = lunchItemsArray.filter(function(item){return (item && (+item)!=0 );}) // cleaning empty values
  var lunchItemSum = cleanArray.length; // lenght = 1 - it's maybe empty array!!! Becouse it is not lenght, it's last index+1

  console.log(lunchItemSum);

  if(lunchItemSum <= 1 && !lunchItemsArray[0]){
    $scope.message = "Please enter data first";
    $scope.messageClass = "text-danger";
  }else if (lunchItemSum < 4) {
    $scope.message = "Enjoy!";
    $scope.messageClass = "text-success";
  }else if (lunchItemSum > 3) {
    $scope.message = "Too much!";
    $scope.messageClass = "text-danger";
  }
}

};

})();
