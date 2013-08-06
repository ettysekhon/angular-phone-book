angular.module('app', ['contacts', 'about', 'service.config'])

angular.module('app').config(['$routeProvider', '$locationProvider', 'config', function ($routeProvider, $locationProvider, config) {
    $routeProvider
    .otherwise(
    {
        redirectTo: config.routes.contacts
    });
}]);

angular.module('app').controller('HeaderController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.routeIs = function (route) {
            return $location.path().indexOf(route) > 0;
        };
    }]);
