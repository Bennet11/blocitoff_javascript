(function() {
  function MainCtrl($firebaseArray) {
    var ref = firebase.database().ref();
    this.tasks = $firebaseArray(ref)

    this.addTask = function(newTask) {
      var now = new Date();
      this.tasks.$add({ text: newTask, completed: false, expired: false, created: now.getTime() });
      this.newTask = " "
    }

  };

  angular
    .module('BlocItOff')
    .controller('MainCtrl', ['$firebaseArray', MainCtrl]);
})();
