# Selenium tests for mailvelope

The aim of this project is to do integration / selenium tests with mailvelope. 
The source code included in this project will be used to actually execute the tests on a selenium server (which will have to be started independently)

## Running the tests

Before running the tests, you will need to compile the mailvelope extension with the key provided in the config directory. Once this is done,
both the chrome and firefox extensions should be in the /data/extensions directory:
- mailvelope.chrome.crx
- mailvelope.firefox.xpi

To run the tests:
Chrome: ./node_modules/.bin/wdio ./webdriverio/config/chrome.conf.js 
Firefox: ./node_modules/.bin/wdio ./webdriverio/config/firefox.conf.js 