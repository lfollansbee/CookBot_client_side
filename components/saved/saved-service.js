(function(){
  angular.module("cookbookApp")
  .service("SavedService", SavedService);

  SavedService.$inject = ["$http", "$stateParams", "$location"]

  function SavedService($http, $stateParams, $location){

    return {
      deleteSaved: deleteSaved
      // addNote: addNote
    };


    function deleteSaved(){
      console.log($stateParams);
      $http({
        method: 'GET',
        // url: 'http://localhost:3000/saved/delete/' + $stateParams.id
        url: 'https://cookbook-app.herokuapp.com/saved/delete/' + $stateParams.id
      })
      .then(function(response){
        console.log(response.data);
        $location.path("/saved")
      }, function(err){
        return err;
      });
    }

  }
})()
