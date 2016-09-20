(function(){
  angular.module("cookbookApp")
  .controller("ResultsController", ResultsController)

  ResultsController.$inject = ["$scope", "SearchService"];

  function ResultsController($scope, SearchService){

    $scope.returnedRecipes = SearchService.getResults();

  }
})();
