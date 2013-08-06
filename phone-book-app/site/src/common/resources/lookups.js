//TODO: data hard-coded in client pull from server later
angular.module('resource.lookups', []);
angular.module('resource.lookups').factory('lookups', function () {
    return {
        superHeroTypes: [{ "id": 1, "name": "dc" }, { "id": 2, "name": "marvel" }],
        contactOrderByOptions: [{ "value": "firstName", "description": "first name" }, { "value": "lastName", "description": "last name" }],
        orderByDirections: [{ "value": false, "description": "ascending" }, { "value": true, "description": "descending" }]
    }
});