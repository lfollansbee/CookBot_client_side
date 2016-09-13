(function(){
  angular
  .module('cookbookApp', [
    "ui.router"
  ])

  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partials/home.html',
        controller: 'SearchController'
      })
      .state('results', {
        url: '/results/:id',
        templateUrl: 'partials/results.html',
        controller: 'ResultsController'
      })
      .state('recipe', {
        url: '/recipe/:id',
        templateUrl: 'partials/recipe.html',
        controller: 'RecipeController'
      })
      .state('fridge', {
        url: '/fridge',
        templateUrl: 'partials/fridge.html',
        controller: 'FridgeController'
      })
      .state('fridge-results', {
          url: '/fridge-results',
          templateUrl: 'partials/fridge-results.html',
          controller: 'FridgeResultsController'
      });

  });
})();
