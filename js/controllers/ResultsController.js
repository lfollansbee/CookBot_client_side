(function(){
  angular.module("cookbookApp")
  .controller("ResultsController", ResultsController)

  ResultsController.$inject = ["$scope", "SearchService", "$http"];

  function ResultsController($scope, SearchService, $http){

    // $scope.view = 'Results Controller';
    $scope.recipes = SearchService.getResults();

  }
})();
