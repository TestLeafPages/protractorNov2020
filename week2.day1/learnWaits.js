const driver = require("protractor")

describe("LeafGround", ()=>{
    it("Learn Protractor Wait", async ()=>{

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/appear.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        var ele = driver.element(driver.by.id("btn"))
        
        // driver.element(driver.by.linkText("CRM/SFA"))

        // Protractor Wait
        driver.browser.wait(driver.protractor.ExpectedConditions.visibilityOf(ele), 5000)
        
        // Printing the ele text
        console.log(await ele.getText());






    })
})