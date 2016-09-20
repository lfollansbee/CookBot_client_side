(function(){
  angular
    .module("cookbookApp")
    .controller("RecipeController", RecipeController)

  RecipeController.$inject = ["$scope", "$http", "$stateParams", "$q", "$speechRecognition", "$speechSynthetis", "$speechCorrection", "RecipeService"];

  function RecipeController($scope, $http, $stateParams, $q, $speechRecognition, $speechSynthetis, $speechCorrection, RecipeService){
    $scope.recipe = {}
    $scope.instructions = [];
    $scope.recipeId = $stateParams.id;
    $scope.areInstructions = true;
    $scope.sourceExists = false;
    $scope.saved = false;

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

    $scope.firstStep = {
      number: 0,
      step: ""
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
      $scope.recipe = (response[0].data)
      $scope.checkSource($scope.recipe)
      if (response[1].data.length >= 1) {
        $scope.instructions = (response[1].data[0].steps)
        $scope.instructions.unshift($scope.firstStep)
        $scope.checkInstructions($scope.instructions)
        console.log($scope.recipe, $scope.instructions)
      }else{
        $scope.areInstructions = false;
      }
    });

    $scope.stepFocus = 0;
    $speechRecognition.setLang('en-US');

    $scope.open = function() {
      $scope.showModal = true;
      $speechRecognition.listen();
      $speechRecognition.onUtterance(function(utterance){
        console.log(utterance);
        if(utterance.includes("next")){
          $scope.goForward()
          $scope.$digest()
        }else if(utterance.includes("back") || utterance.includes("last") || utterance.includes("previous") || utterance ==="last"){
          $scope.goBack()
          $scope.$digest()
        }else if(utterance = "repeat"){
          $scope.$digest()
        }else{
          null
        }
      });
    };

    $scope.ok = function() {
      $scope.showModal = false;
      $speechRecognition.ignore();
    };

    $scope.goBack=function(){
      $scope.stepFocus --
    }

    $scope.goForward=function(){
      $scope.stepFocus ++
      console.log($scope.stepFocus);
    }

    $scope.saveRecipe = function(){
      $scope.saved = true;
      // console.log($scope.saved);
      RecipeService.saveRecipe($scope.recipe)
      if ($scope.areInstructions){
        RecipeService.saveInstructions($scope.instructions)
      }
    }

  }
})();
