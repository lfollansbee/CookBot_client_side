(function(){
  angular.module("cookbookApp")
  .controller("ResultsController", ResultsController)

  ResultsController.$inject = ["$scope", "SearchService", "$http", "$stateParams"];

  function ResultsController($scope, SearchService, $http, $stateParams){
    $scope.recipes = SearchService.getResults();

  }
})();
