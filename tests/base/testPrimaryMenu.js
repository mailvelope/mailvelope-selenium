var assert = require('assert');
var mailvelope = require('../../mailvelope/mailvelope');


describe('As a user who want to use mailvelope with keyboard navigation', function() {

  /**
   * Scenrio:   I should be able to navigate through the primary menu using tab keys
   * Given that  I am in the options section
   * Then        I should see that the “Key management” menu item is selected by default in the primary menu
   *  And        I should see that the content section has the “setup” title
   * When        I press the “tab” key
   * Then        I should see that the “Key Management” menu items has the focus
   * When        I press the “enter” key
   * Then        I should see that the content section has the “Setup” title
   * When        I press the “tab” key
   * Then        I should see that the “File encryption” menu item has the focus
   * When        I press “enter”
   * Then        I should see that the content section has the “File Selection” title
   * When        I press the “tab” key
   * Then        I should see that the “options” menu item has the focus
   * When        I press “enter”
   * Then        I should see that the content section has the “general” title
   * When        I press the “tab” key
   * Then        I should see that the “Documentation” menu item has the focus
   * When        I press the “right arrow” key
   * Then        I should see that the “About” menu item has the focus
   * When        I press the “backtab” key
   * Then        I should see that the “Documentation” menu item has the focus
   * When        I press the “backtab” key
   * Then        I should see that the “options” menu item has the focus
   * When        I press the “backtab” key
   * Then        I should see that the “File encryption” menu item has the focus
   * When        I press the “backtab” key
   * Then        I should see that the “Key management” menu item has the focus
   */
  it('I should be able to navigate through the primary menu using tab keys', function () {

    // Given that I am on the options page.
    mailvelope.goToOptionsPage();

    // I should see that the content section has the “setup” title.
    mailvelope.assertSectionTitle('Setup');

    // When I press the tab key.
    browser.keys('Tab');

    // I should see that the “Key Management” menu items has the focus
    mailvelope.assertPrimaryMenuItemHasFocus('Key Management');

    // Press the enter key.
    browser.keys('Enter');

    // The section title should still be the same.
    mailvelope.assertSectionTitle('Setup');

    // Press the tab key.
    browser.keys('Tab');

    // I should see that the "File Encryption" item in the primary menu has the focus.
    mailvelope.assertPrimaryMenuItemHasFocus('File Encryption');

    // Press the "enter key".
    browser.keys('Enter');

    // The section title should be "File Selection".
    mailvelope.assertSectionTitle('File Selection');

    // Press the "tab" key.
    browser.keys('Tab');

    // I should see that the "Options" item in the primary menu has the focus.
    mailvelope.assertPrimaryMenuItemHasFocus('Options');

    // Press the "enter" key.
    browser.keys('Enter');

    // The section title should be "General".
    mailvelope.assertSectionTitle('General');

    // Press the "tab" key.
    browser.keys('Tab');

    // I should see that the "Documentation" item in the primary menu has the focus.
    mailvelope.assertPrimaryMenuItemHasFocus('Documentation');

    // Press the "tab" key.
    browser.keys('Tab');

    // I should see that the "About" item in the primary menu has the focus.
    mailvelope.assertPrimaryMenuItemHasFocus('About');

    // Press the "back tab" key.
    browser.keys(['Shift', 'Tab']);

    // I should see that the "Documentation" item in the primary menu has the focus.
    mailvelope.assertPrimaryMenuItemHasFocus('Documentation');

    // Press the "back tab" key.
    browser.keys(['Shift', 'Shift', 'Tab']);

    // I should see that the "Options" item in the primary menu has the focus.
    mailvelope.assertPrimaryMenuItemHasFocus('Options');

    // Press the "back tab" key.
    browser.keys(['Shift', 'Shift', 'Tab']);

    // I should see that the "File Encryption" item in the primary menu has the focus.
    mailvelope.assertPrimaryMenuItemHasFocus('File Encryption');

    // Press the "back tab" key.
    browser.keys(['Shift', 'Shift', 'Tab']);

    // I should see that the “Key Management” menu items has the focus.
    mailvelope.assertPrimaryMenuItemHasFocus('Key Management');

    // Press the "Enter" key.
    browser.keys('Enter');

    // The section title should be "Setup".
    mailvelope.assertSectionTitle('Setup');
  });
});