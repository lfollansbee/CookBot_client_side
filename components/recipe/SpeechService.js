(function() {
  angular
    .module("cookbookApp")
    .service('SpeechService', SpeechService);

    SpeechService.$inject = ['$http']

    function SpeechService($http) {
      var text = ""

      return{
        textToSpeech: textToSpeech
      };

      function textToSpeech(text){
        var line = text;
        $http({
          method: 'GET',
          params:{
            text: line
          },
          url: 'http://localhost:3000/speech'
          // url: 'https://cookbook-server.herokuapp.com/speech'
        })
        .then(function(response){
          console.log(response.data);
        }, function(err){
          return err;
        });
      }

    }
})();
