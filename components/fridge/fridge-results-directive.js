(function(){
  angular
    .module('cookbookApp.fridge-results-directive', [])
    .directive('fridgeDirective', fridgeDirective);
    function fridgeDirective(){
      var directive = {
      restrict: 'E',
      templateUrl: 'partials/fridge.html',
      scope: {},
      controller: FridgeController,
      controllerAs: 'FridgeController'
    };
    return directive;
  }
})();
