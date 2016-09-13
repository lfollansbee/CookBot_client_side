(function(){
  angular.module("cookbookApp")
  .controller("FridgeResultsController", FridgeResultsController)

  FridgeResultsController.$inject = ["$scope", "$stateParams", "FridgeService"];

  function FridgeResultsController($scope, $stateParams, FridgeService){

    $scope.fridgeItems = FridgeService.getItems()
    $scope.itemNames = []

    $scope.returnedRecipes = FridgeService.getResults();
  }
})();
