const driver = require("protractor")
const {Given, When, Then} = require("cucumber")
const {setDefaultTimeout} = require("cucumber")
setDefaultTimeout(60 * 1000)

Given("Launch the browser", ()=>{
    driver.browser.get("http://leaftaps.com/opentaps/control/logout")
})

Given("Maximize the browser", ()=>{
    driver.browser.manage().window().maximize()
})

Given("Set the timeouts", ()=>{
    driver.browser.manage().timeouts().implicitlyWait(6000)
})

Given("Enter the username as {string}", (data)=>{
    driver.element(driver.by.id("username")).sendKeys(data)
})

Given("Enter the password as {string}", (data)=>{
    driver.element(driver.by.id("password")).sendKeys(data)
})

When("Clicking on the login button", ()=>{
    driver.element(driver.by.className("decorativeSubmit")).click()
})

Then("Verify login successful", async ()=>{
    driver.browser.sleep(6000)
    console.log(await driver.browser.getTitle());
})


