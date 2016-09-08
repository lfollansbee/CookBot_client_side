(function(){
  angular.module("cookbookApp")
  .controller("MainController", MainController)
  MainController.$inject = ["$scope"];
  //inject your services being used above after $scope

  function MainController($scope){
    //also include any other injections as parameters in the above function
  }
})();
