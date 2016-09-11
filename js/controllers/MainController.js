(function(){
  angular.module("cookbookApp")
  .controller("MainController", MainController)
  MainController.$inject = ["$scope", "$http", "SearchService"];

  function MainController($scope, $http, SearchService){

    $scope.fieldsets=[
      diets= {
        title: "Diet",
        options: [
          { name: 'Pescetarian', value: false },
          { name: 'Vegan', value: false },
          { name:'Vegetarian', value:false }
        ]
      },
      cuisines= {
        title: "Cuisines",
        options: [
          { name: 'Chinese', value:false },
          { name: 'Japanese', value:false },
          { name: 'Korean', value:false },
          { name: 'Vietnamese', value:false },
          { name: 'Thai', value:false },
          { name: 'Indian', value:false },
          { name: 'British', value:false },
          { name: 'French', value:false },
          { name: 'Spanish', value:false },
          { name: 'Greek', value:false },
          { name: 'German', value:false },
          { name: 'Italian', value:false },
          { name: 'Mexican', value:false },
          { name: 'Middle Eastern', value:false },
          { name: 'American', value:false },
          { name: 'Cajun', value:false },
          { name: 'Southern', value:false },
          { name: 'Caribbean', value:false },
          { name: 'Latin American', value:false }
        ]
      },
      intolerances= {
        title: "Intolerances",
        options: [
          { name: 'Dairy', value: false },
          { name: 'Egg', value: false },
          { name: 'Gluten', value: false },
          { name: 'Peanut', value: false },
          { name: 'Sesame', value: false },
          { name: 'Seafood', value: false },
          { name: 'Shellfish', value: false },
          { name: 'Soy', value: false },
          { name: 'Sulfite', value: false },
          { name: 'Tree Nut', value: false },
          { name: 'Wheat', value: false }
        ]
      },
      types= {
        title: "Type",
        options:[
          { name: 'Main Course', value: false },
          { name: 'Side Dish', value: false },
          { name: 'Dessert', value: false },
          { name: 'Appetizer', value: false },
          { name: 'Salad', value: false },
          { name: 'Bread', value: false },
          { name: 'Breakfast', value: false },
          { name: 'Soup', value: false },
          { name: 'Beverage', value: false },
          { name: 'Sauce', value: false }
        ]
      }
    ];

    $scope.checkedOptions =  [
      diets= [],
      cuisines= [],
      intolerance= [],
      types= []
    ]

    $scope.search = function(query){
      SearchService.simpleSearch(query)
    }

    $scope.addChecks = function(){
      for(var i=0; i<$scope.fieldsets.length; i++){
        var options = $scope.fieldsets[i].options;
        for(var j=0; j<options.length; j++){
          if (options[j].value === true){
            $scope.checkedOptions[i].push(options[j].name)
          }
        }
      }
      return $scope.checkedOptions;
    }

    $scope.advSearch = function(query){
      $scope.addChecks();
      SearchService.advancedSearch(query, $scope.checkedOptions)
    }

  }
})();
