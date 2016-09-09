(function(){
  angular.module("cookbookApp")
  .controller("MainController", MainController)
  MainController.$inject = ["$scope", "$http"];
  //inject your services being used above after $scope

  function MainController($scope, $http){
    //also include any other injections as parameters in the above function

    $http({
      method:'GET',
      params:{
        query: 'cinnamon rolls',
        type: 'breakfast',
        // cuisine: 'mexican',
        number: '15'
      },
      url: "http://localhost:3000/search"
    })
    .then(function(data){
      $scope.recipes = data.data.results;
      console.log($scope.recipes);
    })
  }
})();
