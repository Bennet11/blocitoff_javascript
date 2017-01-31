(function() {
  function HistoryCtrl($firebaseArray) {
    var ref = firebase.database().ref();
    this.tasks = $firebaseArray(ref)
  };
  
  angular
    .module('BlocItOff')
    .controller('HistoryCtrl' ['$firebaseArray', HistoryCtrl])
})();
