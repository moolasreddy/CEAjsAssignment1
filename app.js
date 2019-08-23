(function(){
  'use strict';

  angular.module('lunchCheck', [])
  .controller('lunchCheckController', lunchCheckController);

  lunchCheckController.$inject = ['$scope'];

  function lunchCheckController($scope) {

    $scope.lunchItem = "";
    $scope.message = "";
    $scope.messageClass = "";

    $scope.checkLunch = function() {
      // Splitting the array
      var lunchItemsArray = $scope.lunchItem.split(',');
      // cleaning empty values in the array
      var cleanArray = lunchItemsArray.filter(function(item){return (item && (+item)!=0 );})
      // To calculate number of Items entered
      var lunchItemSum = cleanArray.length;

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
