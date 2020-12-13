const {Before, After} = require("cucumber")
const driver = require("protractor")

Before(()=>{
    driver.browser.waitForAngularEnabled(false)
})

After(()=>{
    console.log("The execution is done");
})