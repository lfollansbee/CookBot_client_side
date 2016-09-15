(function() {
  angular
    .module("cookbookApp")
    .service('SpeechService', SpeechService);

    SpeechService.$inject = ['$http']

    function SpeechService($http) {
      var text = ""
      var sound = ""

      return{
        textToSpeech: textToSpeech,
        setAudio: setAudio,
        getAudio: getAudio
      };

      function setAudio(data){
        sound = data;
      };

      function getAudio(){
        return sound
      }

      function textToSpeech(array){
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
          // console.log(response.data);
          console.log(typeof(response.data));
          setAudio(response.data)
        }, function(err){
          return err;
        });
      }

    }
})();
