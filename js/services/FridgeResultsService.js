(function(){
  angular.module("cookbookApp")
  .service("FridgeResultsService", FridgeResultsService);

  FridgeResultsService.$inject = ["$http", "$stateParams"]

  function FridgeResultsService($http, $stateParams){
    var fridgeItems = []
    var results = []

    return {
      getItems: getItems,
      addItem: addItem,
      editItem: editItem,
      deleteItem: deleteItem,
      fridgeSearch: fridgeSearch,
      setResults: setResults,
      getResults:getResults
    };

    function fridgeSearch(array){
      var searchQuery = array;
      console.log(searchQuery);
      $http({
        method: 'GET',
        params:{
          query: array
        },
        url: 'http://localhost:3000/search/fridge'
      })
      .then(function(response){
        console.log(response.data);
        setResults(response.data);
      }, function(err){
        return err;
      });
    }


  }
})()
