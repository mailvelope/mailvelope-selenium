var assert = require('assert');
var _ = require('underscore');

var mailvelope = {
  chromeBaseUrl : 'chrome-extension://ffgmdhmlbpemjfeejfgjidcpgmipkpen',
  firefoxBaseUrl: 'resource://jid1-aqqsmbyb0a8adg-at-jetpack/data'
};

/**
 * Go to mailvelope options page.
 * @param string title
 */
mailvelope.goToOptionsPage = function() {
  var baseUrl = '';
  if (browser.options.desiredCapabilities.browserName == 'firefox') {
    baseUrl = this.firefoxBaseUrl;
  }
  else if (browser.options.desiredCapabilities.browserName == 'chrome') {
    baseUrl = this.chromeBaseUrl;
  }

  browser.url(baseUrl + '/app/app.html#keyring');

  // Set focus on page.
  browser.click('#settingsPanel');
};


/**
 * Assert that the section title matches the given title.
 * @param string title
 */
mailvelope.assertSectionTitle = function(title) {
  var activeSectionSelector = 'body > .container > .tab-content > div.tab-pane.active.in';

  // Wait until active section can be identified.
  browser.waitForExist(activeSectionSelector);

  var activeSectionId = $(activeSectionSelector).getAttribute('id');
  var selector = '';
  switch(activeSectionId) {
    case 'keyring':
      selector = activeSectionSelector + ' section.active h3 span';
      break;
    case 'encrypting':
      selector = activeSectionSelector + ' section.tab-content h3.panel-title span';
      break;
    case 'settings':
      selector = activeSectionSelector + ' section.tab-pane.active.in h3';
      break;
  }

  var sectionTitle = $$(selector)[0].getText();
  assert.equal(sectionTitle, title);
};

/**
 * Assert that the given primary menu item has the focus.
 * @param string title
 */
mailvelope.assertPrimaryMenuItemHasFocus = function(itemName) {
  this.assertElementHasFocus('a=' + itemName);
};

/**
 * Assert that the given secondary menu item has the focus.
 * @param string title
 */
mailvelope.assertSecondaryMenuItemHasFocus = function(itemName) {
  this.assertElementHasFocus('a=' + itemName);

};

/**
 * Assert that the element has the focus.
 * @param string title
 */
mailvelope.assertElementHasFocus = function(selector) {
  assert.ok(browser.hasFocus(selector));
};

module.exports = mailvelope;