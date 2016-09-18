(function(){
  angular
    .module("cookbookApp")
    .controller("SavedController", SavedController)

  SavedController.$inject = ["$scope", "$http", "$stateParams"];

  function SavedController($scope, $http, $stateParams){
    $scope.recipes = []

    $http({
      method: 'GET',
      url: 'http://localhost:3000/saved'
      // url: 'https://cookbook-app.herokuapp.com/saved/'
    })
    .then(function(response) {
      $scope.recipes = response.data
      console.log(response);
    });

  }
})();
