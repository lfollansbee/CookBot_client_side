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
      template: '<audio ng-src="{{url}}" autoplay controls></audio>',
      link: function ($scope) {
          $scope.$watch('code', function (newVal, oldVal) {
             if (newVal !== undefined) {
                 $scope.url = $sce.trustAsResourceUrl(
                  //  "http://localhost:3000/speech/"
                   "https://cookbook-app.herokuapp.com/speech/"
                   + newVal);
             }
          });
      }
    };
    return directive
  }

  RecipeController.$inject = ["$scope", "$http", "$stateParams", "$q", "$speechRecognition", "$speechSynthetis", "$speechCorrection"];

  function RecipeController($scope, $http, $stateParams, $q, $speechRecognition, $speechSynthetis, $speechCorrection){
  }

})()
