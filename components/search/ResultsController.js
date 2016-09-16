(function(){
  angular.module("cookbookApp")
  .controller("ResultsController", ResultsController)

  ResultsController.$inject = ["$scope", "SearchService", "$stateParams"];

  function ResultsController($scope, SearchService, $stateParams){

    $scope.returnedRecipes = SearchService.getResults();

  }
})();
