var assert = require('assert');
var mailvelope = require('../../mailvelope/mailvelope');
var selectors = require('../../mailvelope/selectors');



describe('As a user who want to use mailvelope with keyboard navigation', function() {

  /**
   * Given that  I am in the options section
   * Then        I should see that the “setup” menu item is selected by default in the secondary menu
   *  And        I should see that the Content section has the “setup” title
   * When        I press the tab key 5 times in order to set the focus to the next component
   * Then        I should see that the “Mailvelope” select field has the focus
   * When        I press the tab key
   * Then        I should see that the “Display keys” secondary menu item gets the focus
   * When        I press the “tab” key
   * Then        I should see that the “Import keys” menu item gets the focus
   * When        I press “enter”
   * Then        I should see that the content section contains the “Import keys” title
   *  And        I should see that the “Import keys” menu item is selected
   * When        I press the “tab” key
   * Then        I should see that the “Generate key” menu item gets the focus
   * When        I press “enter”
   * Then        I should see that the content section contains the “Generate key” title
   *  And        I should see that the “Generate key” menu item is selected
   * When        I press the “tab” key
   * Then        I should see that the “Setup” menu item gets the focus
   * When        I press “enter”
   * Then        I should see that the content section contains the “setup” title
   *  And        I should see that the “setup” menu item is selected
   * When        I press the “back tab” key
   * Then        I should see that the “Generate key” menu item gets the focus
   * When        I press the “back tab” key
   * Then        I should see that the “Import keys” menu item gets the focus
   * When        I press the “back” key
   * Then        I should see that the “Display Keys” menu item gets the focus
   */
  it('I should be able to navigate through the secondary menu using tab keys', function () {

    // Given that  I am in the options section.
    mailvelope.goToOptionsPage();

    // I press the tab key 5 times in order to set the focus to the next component.
    browser.keys('Tab');
    browser.pause(200);
    browser.keys('Tab');
    browser.pause(200);
    browser.keys('Tab');
    browser.pause(200);
    browser.keys('Tab');
    browser.pause(200);
    browser.keys('Tab');
    browser.pause(200);
    browser.keys('Tab');
    browser.pause(200);

    //  I should see that the “Mailvelope” select field has the focus.
    mailvelope.assertElementHasFocus(selectors.keyringSwitcher);

    // When I press the "tab" key.
    browser.keys('Tab');

    // I should see that the “Display keys” secondary menu item gets the focus.
    mailvelope.assertSecondaryMenuItemHasFocus('Display Keys');

    // I press "Enter".
    browser.keys('Enter');

    // I should see that the section title is "key management".
    browser.waitForVisible(selectors.sectionDisplayKeys);
    mailvelope.assertSectionTitle('Key Management');

    // I press the "tab" key.
    browser.keys('Tab');

    // I should see that the “Import Keys” secondary menu item gets the focus.
    mailvelope.assertSecondaryMenuItemHasFocus('Import Keys');

    // I press "enter".
    browser.keys('Enter');

    // I should see that the section title is "import keys".
    browser.waitForVisible(selectors.sectionImportKey);
    mailvelope.assertSectionTitle('Import Keys');

    // I press the "tab" key.
    browser.keys('Tab');

    // I should see that the “Generate key” secondary menu item gets the focus.
    mailvelope.assertSecondaryMenuItemHasFocus('Generate Key');

    // I press "enter".
    browser.keys('Enter');

    // I should see that the section title is "Generate key".
    browser.waitForVisible(selectors.sectionGenerateKey);
    mailvelope.assertSectionTitle('Generate Key');

    // I press the "tab" key.
    browser.keys('Tab');

    // I should see that the “Setup” secondary menu item gets the focus.
    mailvelope.assertSecondaryMenuItemHasFocus('Setup');

    // I press "enter".
    browser.keys('Enter');

    // I should see that the section title is "Generate key".
    browser.waitForVisible(selectors.sectionSetup);
    mailvelope.assertSectionTitle('Setup');

    // I press the "back tab" key.
    browser.keys(['Shift', 'Tab']);

    // I should see that the “Generate key” secondary menu item gets the focus.
    mailvelope.assertSecondaryMenuItemHasFocus('Generate Key');

    // I press the "back tab" key.
    browser.keys(['Shift', 'Shift', 'Tab']);

    // I should see that the “Import Keys” secondary menu item gets the focus.
    mailvelope.assertSecondaryMenuItemHasFocus('Import Keys');

    // I press the "back tab" key.
    browser.keys(['Shift', 'Shift', 'Tab']);

    // I should see that the “Display keys” secondary menu item gets the focus.
    mailvelope.assertSecondaryMenuItemHasFocus('Display Keys');
  });
});