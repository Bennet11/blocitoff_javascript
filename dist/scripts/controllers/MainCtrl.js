(function() {
  function MainCtrl($firebaseArray) {
    var ref = firebase.database().ref();
    var tasks = $firebaseArray(ref)

    var addTask = function(newTask) {
      tasks.$add({ text: newTask });
    }

    return {
      all: tasks
    };
  };

  angular
    .module('BlocItOff')
    .controller('MainCtrl', ['$firebaseArray', MainCtrl]);
})();
