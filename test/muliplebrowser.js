var webDriver = require('selenium-webdriver');
var seleniumDrivers = require('selenium-drivers');

seleniumDrivers.init({

    browserName: 'firefox',
    download: true

}).then(function () {

    var driver = new webDriver.Builder()
        .forBrowser('firefox')
        .build();

    driver.get('http://www.google.com/ncr');
});





