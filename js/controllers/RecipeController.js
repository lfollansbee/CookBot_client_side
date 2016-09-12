(function(){
  angular.module("cookbookApp")
  .controller("RecipeController", RecipeController)

  RecipeController.$inject = ["$scope", "GetRecipeService", "$http", "$stateParams"];

  function RecipeController($scope, GetRecipeService, $http, $stateParams){

    $scope.fetchRecipe = (function() {
      GetRecipeService.fetchRecipe($stateParams.id)
    })()

    $scope.recipe = GetRecipeService.getRecipe();
    console.log("recipe:", $scope.recipe);

  }
})();
