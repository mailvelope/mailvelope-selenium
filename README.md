# Selenium tests for mailvelope

The aim of this project is to do integration / selenium tests with mailvelope. 
The source code included in this project will be used to actually execute the tests on a selenium server (which will have to be started independently)

## Tests framework comparison
Before writing selenium tests, we want to compare the different frameworks available for nodejs / javacsript and make sure that we'll be able
to write tests that can run with the mailvelope extension in the most popular browsers: firefox and chrome.

Initially, this repository will contain the source code to test the different frameworks and to demo what we can do with them. 
Later on, after we select one it will evolve into a normal test repository and the code used to test the different frameworks will be removed.

### Protractor
Status: Extension not working on firefox.

To run the demo test:
Chrome: ./node_modules/protractor/bin/protractor ./protractor/config/config-chrome.js
Firefox: ./node_modules/protractor/bin/protractor ./protractor/config/config-firefox.js 

For Firefox, you will notice that the extension is not loading.

### Webdriverio
Status: Extension can load for both chrome and firefox.

To run the demo test:
Chrome: ./node_modules/.bin/wdio ./webdriverio/config/chrome.conf.js 
Firefox: ./node_modules/.bin/wdio ./webdriverio/config/firefox.conf.js 