(function() {
  function Expire($firebaseArray) {
    var ref = firebase.database().ref();
    var tasks = $firebaseArray(ref);

    tasks.$loaded().then(function(){
      tasks.forEach(function(task) {
        var currentTime = new Date();
        console.log("currentTime is " + currentTime);
        console.log("task.created is " + task.created);
        console.log("currentTime.getTime() is " + currentTime.getTime());
        if ((currentTime.getTime() - task.created) >= 100000000000){
          task.expired = true;
          tasks.$save(task);
          return true;
        } else {
          return false;
        }
      });
    });
  }

  angular
    .module('BlocItOff')
    .run(['$firebaseArray', Expire]);
})();
