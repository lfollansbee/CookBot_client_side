(function(){
  angular.module("cookbookApp")
  .controller("RecipeController", RecipeController)

  RecipeController.$inject = ["$scope", "$http", "$stateParams", "SpeechService", "$q"];

  function RecipeController($scope, $http, $stateParams, SpeechService, $q){
    $scope.recipe = {}
    $scope.instructions = [];
    $scope.recipeId = $stateParams.id;

    $q.all([
      $http({
        method: 'GET',
        params:{
          id: $scope.recipeId
        },
        url: 'http://localhost:3000/recipeId/'
      }),
      $http({
        method: 'GET',
        params:{
          id: $scope.recipeId
        },
        url: 'http://localhost:3000/recipeInstructions/'
      })
    ]).then(function(response) {
      $scope.recipe = (response[0].data)
      $scope.instructions = (response[1].data[0].steps)
      console.log($scope.recipe, $scope.instructions);
    });

  }
})();
