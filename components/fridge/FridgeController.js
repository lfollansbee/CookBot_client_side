(function(){
  angular.module("cookbookApp")
  .controller("FridgeController", FridgeController)

  FridgeController.$inject = ["$scope", "FridgeService"];

  function FridgeController($scope, FridgeService){
    $scope.fridgeItems = FridgeService.getItems()
    $scope.itemNames = []

    $scope.toggleEditForm = function(item){
      item.editFormShowing = !item.editFormShowing;
    }

    $scope.addItem = function(newItem){
      $scope.addItemForm.$setPristine()
      FridgeService.addItem(newItem);
      $scope.item = {}
    }

    $scope.editItem = function(idx, item){
      FridgeService.editItem(idx, item)
    }

    $scope.deleteItem = function(idx){
      FridgeService.deleteItem(idx)
    }

    $scope.arrayOfItems = function(){
      for (var i = 0; i < $scope.fridgeItems.length; i++) {
        $scope.itemNames.push($scope.fridgeItems[i].itemName)
      }
      return $scope.itemNames
    }

    $scope.fridgeSearch = function(){
      $scope.arrayOfItems()
      FridgeService.fridgeSearch($scope.itemNames)
    }

  }
})();
