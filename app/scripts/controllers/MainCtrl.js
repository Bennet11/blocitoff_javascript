(function() {
  function MainCtrl($firebaseArray) {
    var ref = firebase.database().ref();
    this.tasks = $firebaseArray(ref);
    this.setPriority = "Low";

    this.addTask = function(newTask) {
      this.tasks.$add({
        text: this.newTask,
        completed: false,
        expired: false,
        priority: this.setPriority,
        created: firebase.database.ServerValue.TIMESTAMP
      });
      return newTask
      this.newTask = " "
    }

    this.completedTask = function(task) {
      task.completed = true;
      this.tasks.$save(task);
    }
  };

  angular
    .module('BlocItOff')
    .controller('MainCtrl', ['$firebaseArray', MainCtrl]);
})();
