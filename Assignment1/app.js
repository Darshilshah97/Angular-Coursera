(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    //$scope.msg="";
    //console.log($scope.calculate);
    $scope.calculate="";
    $scope.check = function (){
      Checker($scope);
    };



  }

  function Checker(string) {
    var str = string.calculate;
    console.log(str);
    var str1 = str.split(',');
    var temp = str1.length;
    console.log(temp);

    string.msg=message(string,temp);
    }
    function message(string,temp) {
      if(temp > 3) {
        return "Too Much!";
    //console.log('Too much');
    }
    else if (string.calculate=="") {
      return "Aren`t you hungry??";
      //console.log('hungry');
    }
    else {
      return "Enjoy";
      //console.log('Enjoy');
    }
    }


})();
