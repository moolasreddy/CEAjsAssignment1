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
      // Spitting spearated by comma's
      var lunchItemsArray = $scope.lunchItem.split(',');
      // cleaning empty values
      var cleanArray = lunchItemsArray.filter(function(item){return (item && (+item)!=0 );})
      // length = 1 - it's maybe empty array!!! Becouse it is not length, it's last index+1
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
