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
        getResults: getResults,
        advancedSearch: advancedSearch
      };

      function setResults(data){
        results = data;
      };

      function getResults(){
        return results;
      };

      function simpleSearch(item){
        var searchQuery = item;
        $http({
          method: 'GET',
          params:{
            query: item,
            number: 12
          },
          url: 'http://localhost:3000/search'
          // url: "https://cookbook-app.herokuapp.com/search"
        })
        .then(function(response){
          setResults(response.data.results);
          // console.log(response.data.results);
          $location.path('/results/' + searchQuery)
        }, function(err){
          return err;
        });
      }

      function advancedSearch(item, checkedOptions){
        var params={
          query:item,
          diet: null,
          cuisine: null,
          intolerances: null,
          type:null,
          numer: 12
        }
        if(checkedOptions[0].length > 0){
          params.diet = checkedOptions[0]
        }
        if(checkedOptions[1].length > 0){
          params.cuisine = checkedOptions[1]
        }
        if(checkedOptions[2].length > 0){
          params.intolerances = checkedOptions[2]
        }
        if(checkedOptions[3].length > 0){
          params.type = checkedOptions[3]
        }

        $http({
          method: 'GET',
          params: params,
          url: 'http://localhost:3000/search'
          // url: "https://cookbook-app.herokuapp.com/search"
        })
        .then(function(response){
          setResults(response.data.results);
          // console.log(response.data.results);
          $location.path('/results/' + params)
        }, function(err){
          return err;
        });
      }

    }
})();
