var assert = require('assert');
//var mailvelope = require('../../mailvelope/mailvelope');



describe('As a user who want to use mailvelope with keyboard navigation', function() {
    it('I should be able to navigate through the primary menu using tab keys', function () {
        browser.url('chrome-extension://ffgmdhmlbpemjfeejfgjidcpgmipkpen/app/app.html');
        browser.click('#settingsPanel');

        //mailvelope.assertSectionTitle('Setup');

        browser.keys('Tab');
        // console.log('focus', browser.getHTML(':focus'));
        assert.equal(browser.hasFocus('a=Key Management'), true);
        browser.keys('Tab');
        assert.equal(browser.hasFocus('a=File Encryption'), true);
        browser.keys('Tab');
        assert.equal(browser.hasFocus('a=Options'), true);
        browser.keys('Tab');
        assert.equal(browser.hasFocus('a=Documentation'), true);
        browser.keys('Tab');
        assert.equal(browser.hasFocus('a=About'), true);
        browser.keys('Tab');
        assert.equal(browser.hasFocus('#keyringSwitcher'), true);
        browser.keys('Tab');
        assert.equal(browser.hasFocus('a=Display Keys'), true);
        browser.keys('Tab');
        assert.equal(browser.hasFocus('a=Import Keys'), true);
        browser.keys('Tab');
        assert.equal(browser.hasFocus('a=Generate Key'), true);
        browser.keys('Tab');
        assert.equal(browser.hasFocus('a=Setup'), true);
    });
});