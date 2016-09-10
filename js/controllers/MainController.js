(function(){
  angular.module("cookbookApp")
  .controller("MainController", MainController)
  MainController.$inject = ["$scope", "$http", "SearchService"];

  function MainController($scope, $http, SearchService){
    // $scope.simpleSearch = true;

    $scope.search = function(query){
      SearchService.simpleSearch(query)
    }

    // $http({
    //   method:'GET',
    //   params:{
    //     query: 'cinnamon rolls',
    //     type: 'breakfast',
    //     // cuisine: 'mexican',
    //     number: '15'
    //   },
    //   url: "http://localhost:3000/search"
    // })
    // .then(function(data){
    //   $scope.recipes = data.data.results;
    //   console.log($scope.recipes);
    // })
  }
})();
