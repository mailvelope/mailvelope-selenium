exports.wdioconf = {

  // Define which test specs should run.
  specs: [
    './test/specs/**/*.js'
  ],

  // Capabilities
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
  }],

  // Test Configurations
  // By default WebdriverIO commands are executed in a synchronous way
  sync: true,

  // Level of logging verbosity
  logLevel: 'silent',

  // Enables colors for log output.
  coloredLogs: true,

  // Warns when a deprecated command is used
  deprecationWarnings: true,

  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './logs/errorShots/',

  // Set a base URL in order to shorten url command calls.
  baseUrl: 'https://demo.mailvelope.com',

  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,

  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,

  // Default request retries count
  connectionRetryCount: 3,

  // Test runner services
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd'
  },

  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide/reporters/dot.html
  reporters: ['dot', 'junit'],
  reporterOptions: {
    junit: {
      outputDir: './logs/'
    }
  },
};