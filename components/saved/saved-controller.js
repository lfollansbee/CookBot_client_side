(function(){
  angular
    .module("cookbookApp")
    .controller("SavedController", SavedController)

  SavedController.$inject = ["$scope", "$http", "SavedService"];

  function SavedController($scope, $http, SavedService){
    $scope.recipes = []

    $http({
      method: 'GET',
      // url: 'http://localhost:3000/saved'
      url: 'https://cookbook-app.herokuapp.com/saved'
    })
    .then(function(response) {
      $scope.recipes = response.data
    });

  }
})();
