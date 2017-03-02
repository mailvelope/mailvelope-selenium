var fs = require('fs');

// Get chrome extension.
function getChromeExtension(filename) {
  var extension = fs.readFileSync(filename);
  var base64 = new Buffer(extension).toString('base64');
  return base64;
};


// Create config for chrome.
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../tests/base/test.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      // To set preferences to chrome
      // prefs: {
      //   homepage:'http://www.google.com',
      //   browser: {
      //     "show_home_button": true
      //   },
      // },
      'extensions': [
        getChromeExtension('data/extensions/mailvelope.chrome.crx')
      ]
    }
  }
};

