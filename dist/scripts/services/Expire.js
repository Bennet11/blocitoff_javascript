(function() {
  function Expire($firebaseArray) {
    var ref = firebase.database().ref();
    var tasks = $firebaseArray(ref);

    tasks.forEach(function(task) {
      var currentTime = new Date();
      if ((currentTime - task.created) >= 60000){
        task.expired = true;
        tasks.$save(task);
        return true;
      } else {
        return false;
      }
    });
  }

  angular
    .module('BlocItOff')
    .run(['$firebaseArray', Expire]);
})();
