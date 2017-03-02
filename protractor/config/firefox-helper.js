var q = require('q');
var FirefoxProfile = require("selenium-webdriver/firefox").Profile;

exports.getFirefoxProfile = function() {
    var deferred = q.defer();

    var firefoxProfile = new FirefoxProfile();
    firefoxProfile.setPreference('browser.newtab.url', 'https://www.angularjs.org');
    firefoxProfile.encode(function(encodedProfile) {
        var multiCapabilities = [{
            browserName: 'firefox',
            firefox_profile : encodedProfile
        }];
        deferred.resolve(multiCapabilities);
    });

    return deferred.promise;
};