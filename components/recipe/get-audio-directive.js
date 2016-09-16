(function(){

  angular
  .module("cookbookApp.audios", [])
  .directive('audios', audios);

  audios.$inject = ["$sce"];

  function audios($sce) {
    var directive = {
      restrict: 'A',
      scope: { code:'=' },
      controller: RecipeController,
      controllerAs: "RecipeController",
      replace: true,
      template: '<audio ng-src="{{url}}" controls></audio>',
      link: function ($scope) {
          $scope.$watch('code', function (newVal, oldVal) {
             if (newVal !== undefined) {
                 $scope.url = $sce.trustAsResourceUrl("http://localhost:3000/speech/" + newVal);
             }
          });
      }
    };
    return directive
  }

  RecipeController.$inject = ["$scope", "$http", "$stateParams", "$q"];

  function RecipeController($scope, $http, $stateParams, $q){
    $scope.recipe = {}
    $scope.instructions = [];
    $scope.recipeId = $stateParams.id;
    $scope.areInstructions = true;

    $scope.checkInstructions = function(array){
      if (array.length === 0){
        $scope.areInstructions = false;
      }
    }

    $scope.splitSteps = function(array){
      // for (var i = 0; i < array.length; i++) {
        console.log($scope.instructions.step.length);
      // }
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
      $scope.instructions = (response[1].data[0].steps)
      $scope.checkInstructions($scope.instructions)
      // console.log($scope.recipe, $scope.instructions);
      // $scope.splitSteps($scope.instructions)
    });
  }

})()

 // "http://stackoverflow.com/questions/23659395/can-i-use-angular-variables-as-the-source-of-an-audio-tag"
