angular.module('about', [])

angular.module('about').config(['$routeProvider', 'config', function ($routeProvider, config) {
    $routeProvider.when(config.routes.about,
        {
            templateUrl: config.templateUrls.about,
            controller: 'AboutController'
        })
}]).controller('AboutController', ['$scope', function ($scope) {
    
}]);