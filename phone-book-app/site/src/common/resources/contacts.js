angular.module('resource.contacts', ['ngResource', 'service.config']);

angular.module('resource.contacts').factory('Contacts', ['$resource', 'config', function ($resource, config) {
    return $resource(config.resourceUrls.contacts, {}, {
        'get':    {method:'GET'},
        'save':   {method:'PUT'},
        'query':  {method:'GET', isArray:true},
        'remove': {method:'DELETE'},
        'delete': {method:'DELETE'} 
    });
}]);