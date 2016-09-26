(function(){
  angular
    .module("cookbookApp")
    .controller("SavedRecipeController", SavedRecipeController)

  SavedRecipeController.$inject = ["$scope", "$stateParams", "$speechRecognition", "$speechSynthetis", "$speechCorrection", "$http", "SavedService"];

  function SavedRecipeController($scope, $stateParams, $speechRecognition, $speechSynthetis, $speechCorrection, $http, SavedService){
    $scope.recipe = {}
    $scope.instructions = []
    $scope.areInstructions = true;
    $scope.sourceExists = false;
    $scope.saved = true;
    $scope.notes = [];

    $scope.firstStep = ""

    $scope.checkInstructions = function(array){
      if (array.length === 0){
        $scope.areInstructions === false;
      }
    }

    $http({
      method: 'GET',
      // url: 'http://localhost:3000/saved/' + $stateParams.id
      url: 'https://cookbook-app.herokuapp.com/saved/' + $stateParams.id
    })
    .then(function(response) {
      $scope.recipe = response.data[0];
      if ($scope.recipe.extendedInstructions !== null && $scope.recipe.extendedInstructions.length >= 1) {
        $scope.instructions = $scope.recipe.extendedInstructions;
        $scope.instructions.unshift($scope.firstStep)
        $scope.checkInstructions($scope.instructions)
      }else{
        $scope.areInstructions = false;
      }
      $scope.notes = response.data[1]
      // console.log($scope.notes);
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
    }

    $scope.deleteSaved = function(){
      SavedService.deleteSaved($scope.recipe.id)
    }

    $scope.addNote = function(note){
      SavedService.addNote(note)
    }

    // $scope.deleteNote = function(id){
    //   SavedService.deleteNote(id)
    // }

  }
})();
