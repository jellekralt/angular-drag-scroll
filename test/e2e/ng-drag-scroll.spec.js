describe('ng-drag-scroll', function() {
    it('should be draggable', function() {
        browser.get('/');

        var container = element(by.css('[drag-scroll]'));
        var lastBlock = element(by.id('lastBlock'));

        browser.actions()
            .mouseMove(container, {x: 0, y: 0})
            .mouseDown()
            .mouseMove(container, {x: 100, y: 5}) // Initial move to trigger drag start
            .mouseMove(container, {x: -1000, y: 5}) // Initial move to trigger drag start
            .mouseUp()
            .perform();

        expect(lastBlock.isDisplayed()).toBeTruthy();
    });
});
