var fs = require('fs');
var FirefoxProfile = require("selenium-webdriver/firefox").Profile;
var helper = require('./firefox-helper.js');


var firefoxProfile = new FirefoxProfile();
firefoxProfile.setPreference("xpinstall.signatures.required", false);
firefoxProfile.setPreference("browser.startup.homepage", "http://www.nu.nl");
firefoxProfile.addExtension('data/extensions/mailvelope.firefox.xpi');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../tests/base/test.js'],
    capabilities: {
        browserName: 'firefox',
        firefox_profile: firefoxProfile,
    },
};
