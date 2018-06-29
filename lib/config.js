/**
 * Copyright (C) 2018 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */
const FIREFOX = 'firefox';
const CHROME = 'chrome';
const DEFAULT_BROWSER = CHROME;
const DEFAULT_CHROME_EXTENSION_PATH = 'data/extensions/mailvelope.chrome.crx';
const DEFAULT_FIREFOX_EXTENSION_PATH = 'data/extensions/mailvelope.firefox';

class Config {
  /**
   * Build config object from Web Driver IO configuration
   * @param wdioconf
   */
  constructor(wdioconf) {
    this.wdioconf = wdioconf;

    // Merge config with web extension specifics item
    // depends on which browser is selected
    // --browser=chrome|firefox (chrome is default)
    this.mergeBrowserCapabilities();

    // Merge service provider specific items
    // depends on if the host / port is set if
    // --host=IP is not set use saucelab
    if (!this.isStandalone() || this.isCI()) {
      wdioconf.user = process.env.SAUCE_USERNAME;
      wdioconf.key = process.env.SAUCE_ACCESS_KEY;
      if (!wdioconf.user || !wdioconf.key) {
        throw new Error('SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are missing');
      }
    }
  }

  /**
   * Return extended webdriver config
   * @returns {*}
   */
  get () {
    return this.wdioconf;
  }

  /**
   * Are the test running on standalone selenium or using saucelab
   * @returns {boolean}
   */
  isStandalone() {
    let isStandalone = false;
    process.argv.forEach((arg, i, args) => {
      if (arg.startsWith('--host=')) {
        isStandalone = true;
        return;
      }
    });
    return isStandalone;
  };

  /**
   * Are the test running on a continuous integration server
   * @returns {boolean}
   */
  isCI() {
    return process.env.CI;
  };

  /* =====================================================
   * Browser selection helper
   *   --browser=chrome|firefox empty default to chrome
   * =====================================================/
  /**
   * Is chrome browser requested
   * @returns {boolean}
   */
  isChrome() {
    return this.isBrowser(CHROME);
  };

  /**
   * Is firefox browser requested
   * @returns {boolean}
   */
  isFirefox() {
    return this.isBrowser(FIREFOX);
  };

  /**
   * Is a given browser requested
   * @param {string} browser
   * @returns {boolean}
   */
  isBrowser(browser) {
    browser = browser.toLowerCase();
    let isBrowser = (DEFAULT_BROWSER === browser);
    process.argv.forEach((arg, i, args) => {
      if (arg.startsWith('--browser=')) {
        isBrowser = (arg === `--browser=${browser}`);
        return;
      }
    });
    return isBrowser;
  };

  /**
   * Return the chrome web extension (Base64 Encoded)
   * @return {string} extension
   */
  getChromeExtension() {
    const fs = require('fs');
    const buffer = fs.readFileSync(DEFAULT_CHROME_EXTENSION_PATH);
    return buffer.toString('base64');
  };

  /**
   *
   * @param config
   * @returns {*}
   */
  mergeBrowserCapabilities() {
    if (this.isChrome()) {
      this.wdioconf.capabilities[0].browserName = CHROME;
      this.wdioconf.capabilities[0].chromeOptions = {
        'extensions': [this.getChromeExtension()]
      };
    } else {
      this.wdioconf.capabilities[0].browserName = FIREFOX;
      this.wdioconf.services = ['firefox-profile'];
      this.wdioconf.firefoxProfile = {
        'xpinstall.signatures.required': false,
        extensions: [DEFAULT_FIREFOX_EXTENSION_PATH]
      };
    }
  };
}

exports.Config = Config;