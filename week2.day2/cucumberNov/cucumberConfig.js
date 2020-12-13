const { logging } = require("protractor");

exports.config = {
    // custom framework
    framework: 'custom',
    // connecting server
    directConnect: true,
    // frameworkPath | protactor-cucumber depedency path
    frameworkPath: 
    require.
    resolve('protractor-cucumber-framework'),
    // load the spec (feature) file
    specs: ['./login.feature'],
    // load the step definition file 
    cucumberOpts: {
        require: ['./loginSteps.js', './hooks.js']
    }
}