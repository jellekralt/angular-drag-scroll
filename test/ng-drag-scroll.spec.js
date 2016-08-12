ngDescribe({
    name: 'dragScroll directive',
    modules: 'ng-drag-scroll',
    inject: ['$window'],
    element: [
        '<div drag-scroll on-drag-start="onDragStart()" on-drag-end="onDragEnd()" style="width: 300px; overflow: hidden;">',
        '<div style="width: 500px;">foo</div>',
        '</div>'
    ].join(''),
    tests: function (deps) {

        it('should be created correctly', function () {
            var scope = deps.element.scope();

            scope.$apply();

            expect(deps.element).toBeDefined();
            expect(deps.element.text()).toBe('foo');
        });

        it('should call onDragStart when starting to drag', function () {
            var window = angular.element(deps.$window);
            var scope = deps.element.scope();

            scope.onDragStart = jasmine.createSpy('onDragStart');

            deps.element.triggerHandler({
                type : 'mousedown'
            });

            deps.element.triggerHandler({
                type : 'mousemove',
                clientX: 50,
                clientY: 0
            });

            expect(scope.onDragStart).toHaveBeenCalled();

        });

        it('should call onDragEnd when the dragging ends', function () {
            var window = angular.element(deps.$window);
            var scope = deps.element.scope();

            scope.onDragEnd = jasmine.createSpy('onDragEnd');

            deps.element.triggerHandler({
                type : 'mousedown'
            });

            window.triggerHandler({
                type : 'mousemove',
                clientX: 50,
                clientY: 0
            });

            window.triggerHandler({
                type : 'mouseup'
            });

            expect(scope.onDragEnd).toHaveBeenCalled();
        });

    }
});
