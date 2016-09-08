(function(){
  angular.module('cookbookApp', ["firebase", "ui.router"])

  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      // DO THE SAME AS ABOVE FOR OTHER VIEWS
  });
})();
