var myApp = angular.module('myApp', [
  'ngRoute',
  'yagoPageControllers',
  'yagoDirectives'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/video.html'
  }).
  when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'AboutController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);