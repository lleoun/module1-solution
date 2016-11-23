(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MyController);

MyController.$inject = ['$scope'];

function MyController($scope, $filter, $injector) {

  $scope.checkLunch = function () {

      var comma = ',';
      var numElements = 0;
      var message="";

      if ($scope.contents)
      {
          var stringToSplit =$scope.contents;
          var arrayOfStrings = stringToSplit.split(comma);
          var numElements = arrayOfStrings.length;
      }

      if (numElements==0)
      {
        message = "Please enter data first";
      }
      else  if (numElements<=3)
      {
        message = "Enjoy!";
      }
      else if (numElements>3)
      {
        message = "Too much!";
      }

      $scope.resultMessage = message;

    };
}

})();
