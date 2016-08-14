var BROWSERS = {
    chrome: {
        directConnect: true,
        capabilities: {
            browserName: 'chrome',
            chromeOptions: {
                args: ['disable-extensions', '--no-sandbox', '--test-type=browser']
            }
        }
    }
};

var BROWSER = process.env.BROWSER ? BROWSERS[process.env.BROWSER] : BROWSERS.chrome;

exports.config = {
    allScriptsTimeout: 100000,

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    // Will normally be overriden with protractor --baseUrl command-line param.
    baseUrl: 'http://localhost:3333',

    // ----- What tests to run -----
    //
    // Spec patterns are relative to the location of this config.
    specs: ['./test/e2e/**/*.js'],

    directConnect: BROWSER.directConnect,

    seleniumAddress: BROWSER.seleniumAddress,

    // ----- Capabilities to be passed to the webdriver instance ----
    //
    // For a full list of available capabilities, see
    // https://code.google.com/p/selenium/wiki/DesiredCapabilities
    // and
    // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
    capabilities: BROWSER.capabilities,

    // Selector for the element housing the angular app - this defaults to
    // body, but is necessary if ng-app is on a descendant of <body>
    rootElement: 'body'
};
