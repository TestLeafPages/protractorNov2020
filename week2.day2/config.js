// For Cross-Browser Testing


exports.config = {
    framework: "mocha",
    directConnect: true,
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["./novWeek2.Day1/learnWaits.js"],
    mochaOpts: {
        timeout: 0,
    }, multiCapabilities: [
        {"browserName": "chrome"},
        {"browserName": "firefox"}
    ]
    
}














