(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      })

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'MainCtrl as main',
        templateUrl: '/templates/home.html'
      })

      .state('history', {
        url: '/',
        templateUrl: '/templates/history.html'
      });
  }

  angular
    .module('BlocItOff', ['ui.router', 'firebase'])
    .config(config);
})();
