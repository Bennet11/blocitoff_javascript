(function() {
  function MainCtrl($firebaseArray) {
    var ref = firebase.database().ref();
    this.tasks = $firebaseArray(ref)

    this.addTask = function(newTask) {
      this.tasks.$add({
        text: this.newTask,
        completed: false,
        expired: false,
        priority: this.setPriority,
        created: firebase.database.ServerValue.TIMESTAMP
      });
      this.newTask = " "
    }
  };

  angular
    .module('BlocItOff')
    .controller('MainCtrl', ['$firebaseArray', MainCtrl]);
})();
