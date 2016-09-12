(function(){
  angular.module("cookbookApp")
  .controller("ResultsController", ResultsController)

  ResultsController.$inject = ["$scope", "SearchService", "$GetRecipeService", "$http", "$stateParams"];

  function ResultsController($scope, SearchService, GetRecipeService, $http, $stateParams){
    $scope.recipes = SearchService.getResults();

  }
})();
