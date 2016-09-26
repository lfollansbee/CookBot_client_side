(function(){
  angular.module("cookbookApp")
  .service("FridgeService", FridgeService);

  FridgeService.$inject = ["$http", "$stateParams", "$location"]

  function FridgeService($http, $stateParams, $location){
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

    function setResults(data){
      results = data;
    };

    function getResults(){
      return results;
    };

    function getItems(){
        return fridgeItems
    };

    function addItem(input){
        input.editFormShowing = false;
        fridgeItems.push(input)
        return fridgeItems
    };

    function editItem(index, item){
        fridgeItems[index].itemName = item.itemName
        fridgeItems[index].editFormShowing = false
    };

    function deleteItem(index){
      fridgeItems.splice(index, 1)
    };


    function fridgeSearch(array){
      var searchQuery = array;
      // console.log(searchQuery);
      $http({
        method: 'GET',
        params:{
          query: array
        },
        // url: 'http://localhost:3000/search/fridge'
        url: 'https://cookbook-app.herokuapp.com/search/fridge'
      })
      .then(function(response){
        // console.log(response.data);
        setResults(response.data);
        $location.path('/fridge-results' )
      }, function(err){
        return err;
      });
    }

  }
})()
