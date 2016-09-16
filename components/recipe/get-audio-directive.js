(function(){
  angular
  .module("cookbookApp.audios", [])
  .directive('audios', audios);

  audios.$inject = ["$sce"];

  function audios($sce) {
    return {
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
  };
})()

 // "http://stackoverflow.com/questions/23659395/can-i-use-angular-variables-as-the-source-of-an-audio-tag"
