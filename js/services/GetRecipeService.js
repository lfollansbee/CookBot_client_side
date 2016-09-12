(function() {
  angular
    .module("cookbookApp")
    .service('GetRecipeService', GetRecipeService);

    GetRecipeService.$inject = ['$http', "$stateParams"]

    function GetRecipeService($http, $stateParams) {
      var recipeId = $stateParams.id
      var recipe = {}

      return{
        fetchRecipe: fetchRecipe,
        setRecipe: setRecipe,
        getRecipe: getRecipe
      };

      function setRecipe(data){
        recipe = data;
        console.log(recipe);
        return recipe
      };

      function getRecipe(){
        return recipe;
      };

      function fetchRecipe(recipeId){
        $http({
          method: 'GET',
          params:{
            id: recipeId
          },
          url: 'http://localhost:3000/recipeId/'
        })
        .then(function(response){
           setRecipe(response.data);
          // console.log(response.data);
        }, function(err){
          return err;
        });
      }

    }
})();
