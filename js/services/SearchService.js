(function() {
  angular
    .module("cookbookApp")
    .service('SearchService', SearchService);

    SearchService.$inject = ['$http', '$location']

    function SearchService($http, $location) {
      var results = [];

      return{
        simpleSearch: simpleSearch,
        setResults: setResults,
        getResults: getResults
      };

      function setResults(data){
        results = data;
      };

      function getResults(){
        return results;
      };

      function simpleSearch(item){
        $http({
          method: 'GET',
          params:{
            query: item
          },
          url: 'http://localhost:3000/search'
        })
        .then(function(response){
          setResults(response.data.results);
          // console.log(response.data.results);
          $location.path('/results')
        }, function(err){
          return err;
        });
      }
    }
})();
