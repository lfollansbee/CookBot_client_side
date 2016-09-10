(function(){
  angular.module("cookbookApp")
  .controller("MainController", MainController)
  MainController.$inject = ["$scope", "$http", "SearchService"];

  function MainController($scope, $http, SearchService){

    $scope.fieldsets={
      diets: {
        title: "Diet",
        options: [
          'Pescetarian',
          'Vegan',
          'Vegetarian'
        ]
      },
      cuisines: {
        title: "Cuisines",
        options: [
          'Chinese',
          'Japanese',
          'Korean',
          'Vietnamese',
          'Thai',
          'Indian',
          'British',
          'French',
          'Spanish',
          'Greek',
          'German',
          'Italian',
          'Mexican',
          'Middle Eastern',
          'American',
          'Cajun',
          'Southern',
          'Caribbean',
          'Latin American'
        ]
      },
      intolerances: {
        title: "Intolerances",
        options: [
          'Dairy',
          'Egg',
          'Gluten',
          'Peanut',
          'Sesame',
          'Seafood',
          'Shellfish',
          'Soy',
          'Sulfite',
          'Tree Nut',
          'Wheat'
        ]
      },
      types: {
        title: "Type",
        options:[
          'Main Course',
          'Side Dish',
          'Dessert',
          'Appetizer',
          'Salad',
          'Bread',
          'Breakfast',
          'Soup',
          'Beverage',
          'Sauce'
        ]
      }
    };

    $scope.search = function(query){
      SearchService.simpleSearch(query)
    }

  }
})();
