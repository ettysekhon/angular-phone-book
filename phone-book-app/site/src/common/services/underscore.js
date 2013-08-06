angular.module('services.underscore', []).factory('_', ['$window', function ($window) {
    return $window._;
}]);;