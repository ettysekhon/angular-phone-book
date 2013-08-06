angular.module('directives.mouse-leave-css', [])
    .directive('mouseLeave', function () {
        return {
            link: function (scope, element, attrs, controller) {
                element.bind('mouseleave', function () {
                    element.removeClass(attrs.mouseLeave);
                });
            }
        }
    });