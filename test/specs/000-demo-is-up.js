var expect = require('chai').expect;

describe('Demo', function() {
  it('should have the right title', function () {
    browser.switchTab(browser.getCurrentTabId());
    browser.url('/');
    const title = browser.getTitle();
    expect(title).to.include('Mailvelope');
  });
});
