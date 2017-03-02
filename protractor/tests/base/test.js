// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        // Wait for some time so we can verify manually that the extension is installed.
        browser.driver.sleep( 30 * 1000);
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});