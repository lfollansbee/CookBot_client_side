(function(){
  angular.module("cookbookApp")
  .service("RecipeService", RecipeService);

  RecipeService.$inject = ["$http", "$stateParams"]

  function RecipeService($http, $stateParams){

    return {
      saveRecipe: saveRecipe,
      saveInstructions: saveInstructions
    };


    function saveRecipe(thisRecipe){
      $http({
        method: 'POST',
        params:{
          id: thisRecipe
        },
        url: 'http://localhost:3000/saved/add'
        // url: 'https://cookbook-app.herokuapp.com/saved/add'
      })
      .then(function(response){
        // console.log(response.data);
      }, function(err){
        return err;
      });
    }

    function saveInstructions(array){
      $http({
        method: 'POST',
        params:{
          id: array,
          originalID: $stateParams
        },
        url: 'http://localhost:3000/saved/addInstructions'
        // url: 'https://cookbook-app.herokuapp.com/saved/addInstructions'
      })
      .then(function(response){
        // console.log(response.data);
      }, function(err){
        return err;
      });
    }

  }
})()
