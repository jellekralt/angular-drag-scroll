(function () {
    'use strict';

    angular
        .module('dragscroll')
        .directive('dragScroll', DragScroll);

    DragScroll.$inject = ['$document', '$window'];

    /* @ngInject */
    function DragScroll($document, $window) {
        //Usage:
        //<div drag-scroll>Lorem ipsum dolor sit amet</div>
        var directive = {
            scope: false,
            restrict: 'A',
            link: function($scope, $element, $attributes, vm) {
                var pushed = 0;
                var axis = $attributes.axis || false;
                var lastClientX;
                var lastClientY;

                // Set event listeners
                $element.on('mousedown', handleMouseDown);
                angular.element($window).on('mouseup', handleMouseUp);
                angular.element($window).on('mousemove', handleMouseMove);

                // Handle destroy event
                $scope.$on('$destroy', destroy);

                /**
                 * Handles mousedown event
                 * @param {object} e MouseDown event
                 */
                function handleMouseDown (e) {
                    var dragAllowed = !('prevent-drag' in e.target.attributes);

                    if(dragAllowed) {
                        pushed = 1;
                        lastClientX = e.clientX;
                        lastClientY = e.clientY;

                        //e.preventDefault();
                        e.stopPropagation();
                    }
                }

                /**
                 * Handles mouseup event
                 * @param {object} e MouseUp event
                 */
                function handleMouseUp () {
                    pushed = 0;
                }

                /**
                 * Handles mousemove event
                 * @param {object} e MouseMove event
                 */
                function handleMouseMove (e) {

                    if (pushed) {
                        if(!axis || axis === 'x') {
                            $element[0].scrollLeft -= (-lastClientX + (lastClientX = e.clientX));
                        }
                        if(!axis || axis === 'y') {
                            $element[0].scrollTop -= (-lastClientY + (lastClientY = e.clientY));
                        }
                    }

                }

                /**
                 * Destroys all the event listeners
                 */
                function destroy () {
                    $element.off('mousedown', handleMouseDown);
                    angular.element($window).off('mouseup', handleMouseUp);
                    angular.element($window).off('mousemove', handleMouseMove);
                }

            }
        };
        return directive;
    }

})();
