(function() {
  function MainCtrl($firebaseArray, $scope) {
    $scope.tasks = $firebaseArray
  };

  angular
    .module('BlocItOff')
    .controller('MainCtrl', ['$scope', '$firebaseArray', MainCtrl]);
})();
