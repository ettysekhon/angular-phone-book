angular.module('directives.mouse-enter-css', [])
    .directive('mouseEnter', function () {
        return {
            link: function (scope, element, attrs, controller) {
                element.bind('mouseenter', function () {
                    element.addClass(attrs.mouseEnter);
                });
            }
        }
});