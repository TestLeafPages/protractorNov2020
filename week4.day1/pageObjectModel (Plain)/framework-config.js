const driver = require("protractor")

exports.config = {

    framework: "mocha",
    directConnect: true,
    
    specs: ["TC001.js"],
    // restartBrowserBetweenTests: true,
    mochaOpts: {
        timeout: 0
    }

}