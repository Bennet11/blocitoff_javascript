(function() {
  function MainCtrl($firebaseArray) {
    var ref = firebase.database().ref();
    this.tasks = $firebaseArray(ref)

    this.addTask = function(newTask) {
      this.tasks.$add({ text: newTask, completed: false, expired: false, created: firebase.database.ServerValue.TIMESTAMP  });
      this.newTask = " "
    }

    this.expiredTask = function(task) {
      var currentTime = new Date();
      if ((currentTime - task.created) >= 604800000){
        return true;
      } else {
        return false;
      }
    };

  };

  angular
    .module('BlocItOff')
    .controller('MainCtrl', ['$firebaseArray', MainCtrl]);
})();
