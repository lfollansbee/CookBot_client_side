(function(){
  angular.module("cookbookApp")
  .service("SavedService", SavedService);

  SavedService.$inject = ["$http", "$stateParams", "$location"]

  function SavedService($http, $stateParams, $location){

    return {
      deleteSaved: deleteSaved,
      addNote: addNote,
      deleteNote: deleteNote
    };

    function deleteSaved(){
      $http({
        method: 'GET',
        // url: 'http://localhost:3000/saved/delete/' + $stateParams.id
        url: 'https://cookbook-app.herokuapp.com/saved/delete/' + $stateParams.id
      })
      .then(function(response){
        $location.path("/saved")
      }, function(err){
        return err;
      });
    }

    function addNote(note){
      $http({
        method: 'POST',
        params: {
          query: note
        },
        // url: 'http://localhost:3000/saved/add-note/' + $stateParams.id
        url: 'https://cookbook-app.herokuapp.com/saved/add-note/' + $stateParams.id
      })
      .then(function(response){
        $location.path("/saved")
      }, function(err){
        return err;
      });
    }

    function deleteNote(noteId){
      $http({
        method: "GET",
        params:{
          query: noteId
        },
        // url: 'http://localhost:3000/saved/delete-note/' + $stateParams.id
        url: 'https://cookbook-app.herokuapp.com/saved/delete-note/' + $stateParams.id
      })
      .then(function(response){
        $location.path("/saved")
      }, function(err){
        return err;
      })
    }

  }
})()
