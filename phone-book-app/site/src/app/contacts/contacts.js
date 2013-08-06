angular.module('contacts', ['resource.contacts', 'resource.lookups', 'service.state', 'service.config', 'directives.mouse-enter-css', 'directives.mouse-leave-css'])

angular.module('contacts').config(['$routeProvider', 'config', function ($routeProvider, config) {
    $routeProvider.when(config.routes.contacts,
        {
            templateUrl: config.templateUrls.contacts,
            controller: 'ContactsController',
            resolve: {
                contacts: ['Contacts', function (Contacts) {
                    return Contacts;
                }]
            }
        })
        .when(config.routes.contact,
        {
            templateUrl: config.templateUrls.contact,
            controller: 'ContactController',
            resolve: {
                contacts: ['Contacts', function (Contacts) {
                    return Contacts;
                }]
            }
        })
    }])
   .controller('ContactsController', ['$scope', 'contacts', 'lookups', '$location', 'state', 'config', function ($scope, contacts, lookups, $location, state, config) {

       $scope.contacts = contacts.query();

       $scope.superHeroTypes = lookups.superHeroTypes;
       $scope.orderByOptions = lookups.contactOrderByOptions;
       $scope.orderByDirections = lookups.orderByDirections;

       var filter = $scope.filter = state.contactFilter || {
           orderBy: null,
           orderByDirection: null,
           superHeroType: null,
           search: null
       };

       $scope.$watch('filter', saveFilter, true);

       function saveFilter() {
           //TODO: use local storage service rather than state service
           state.contactFilter = filter;
       };

       $scope.gotoContactDetails = function (contact) {
           $location.path(config.routes.contacts + '/' + contact.id);
       }
   }])
    .controller('ContactController', ['$scope', 'contacts', '$location', '$route', 'config', function ($scope, contacts, $location, $route, config) {

        $scope.hasSaved = false;
        var contact = contacts.get({ id: $route.current.params.id });
        $scope.contact = contact;

        $scope.regularExpressions = config.regularExpressions;

        console.log(config.regularExpressions);

        $scope.save = function (contact, contactForm) {
            if (contactForm.$valid) {
                $scope.hasSaved = true;
            }
        }

        $scope.goBack = function () {
            $location.path(config.routes.contacts)
        };
    }])
    .filter('isSuperHero', function () {
        return function (input, superHero) {
            if (typeof superHero == 'undefined' || superHero == null) {
                return input;
            } else {
                var out = [];
                for (var a = 0; a < input.length; a++) {
                    if (input[a].superHeroType == superHero) {
                        out.push(input[a]);
                    }
                }
                return out;
            }
        };
    });