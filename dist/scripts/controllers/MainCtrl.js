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
      if (this.setPriority === undefined) {
        this.setPriority = "Low";
      }
      return newTask
      this.newTask = " "
    }

    this.completedTask = function(task) {
      task.completed = true;
    }
  };

  angular
    .module('BlocItOff')
    .controller('MainCtrl', ['$firebaseArray', MainCtrl]);
})();
