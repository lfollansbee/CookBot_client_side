(function(){
  angular
    .module("cookbookApp")
    .controller("RecipeController", RecipeController)

  RecipeController.$inject = ["$scope", "$http", "$stateParams", "$q"];

  function RecipeController($scope, $http, $stateParams, $q){
    $scope.recipe = {}
    $scope.instructions = [];
    $scope.recipeId = $stateParams.id;
    $scope.areInstructions = true;
    $scope.sourceExists = false;

    $scope.checkInstructions = function(array){
      if (array.length === 0){
        $scope.areInstructions === false;
      }
    }

    $scope.checkSource = function(array){
      if($scope.recipe.hasOwnProperty('sourceName')){
        $scope.sourceExists = true;
      }
    }

    $q.all([
      $http({
        method: 'GET',
        params:{
          id: $scope.recipeId
        },
        url: 'http://localhost:3000/recipeId/'
        // url: 'https://cookbook-app.herokuapp.com/recipeId/'
      }),
      $http({
        method: 'GET',
        params:{
          id: $scope.recipeId
        },
        url: 'http://localhost:3000/recipeInstructions/'
        // url: 'https://cookbook-app.herokuapp.com/recipeInstructions/'
      })
    ]).then(function(response) {
      // console.log(response);
      $scope.recipe = (response[0].data)
      $scope.checkSource($scope.recipe)
      if (response[1].data.length >= 1) {
        $scope.instructions = (response[1].data[0].steps)
        $scope.checkInstructions($scope.instructions)
        console.log($scope.recipe, $scope.instructions)
      }else{
        $scope.areInstructions = false;
      }
    });

  }
})();
