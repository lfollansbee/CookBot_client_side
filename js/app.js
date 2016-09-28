(function(){
  angular
    .module('cookbookApp', [
    "ui.router",
    "cookbookApp.audios",
    "ui.bootstrap.modal",
    "adaptive.speech"
  ])

  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'SearchController'
      })
      .state('about',{
        url:'/about',
        templateUrl: 'templates/about.html'
      })
      .state('results', {
        url: '/results/:id',
        templateUrl: 'templates/results.html',
        controller: 'ResultsController'
      })
      .state('recipe', {
        url: '/recipe/:id',
        templateUrl: 'templates/recipe.html',
        controller: 'RecipeController'
      })
      .state('fridge', {
        url: '/fridge',
        templateUrl: 'templates/fridge.html',
        controller: 'FridgeController'
      })
      .state('fridge-results', {
          url: '/fridge-results',
          templateUrl: 'templates/results.html',
          controller: 'FridgeResultsController'
      })
      .state('saved', {
          url: '/saved',
          templateUrl: 'templates/saved.html',
          controller: 'SavedController'
      })
      .state('saved-recipe', {
          url: '/saved/recipe/:id',
          templateUrl: 'templates/saved-recipe.html',
          controller: 'SavedRecipeController'
      })
  });
})();
