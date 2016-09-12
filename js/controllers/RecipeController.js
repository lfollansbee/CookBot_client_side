(function(){
  angular.module("cookbookApp")
  .controller("RecipeController", RecipeController)

  RecipeController.$inject = ["$scope", "$http", "$stateParams"];

  function RecipeController($scope, $http, $stateParams){
    $scope.recipe = {}
    $scope.recipeId = $stateParams.id;

    $http({
      method: 'GET',
      params:{
        id: $scope.recipeId
      },
      url: 'http://localhost:3000/recipeId/'
    })
    .then(function(response){
       $scope.recipe = (response.data)
      // console.log(response.data);
      console.log($scope.recipe);
    }, function(err){
      return err;
    });


  }
})();
