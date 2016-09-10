(function(){
  angular.module('cookbookApp', ["ui.router"])

  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .state('results', {
        url: '/results',
        templateUrl: 'partials/results.html',
        controller: 'ResultsController'
      })
  });
})();
