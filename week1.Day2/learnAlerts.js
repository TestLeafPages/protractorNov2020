const driver = require("protractor")

describe("LeafGround", ()=>{
    it("Handle Alerts", ()=>{

        driver.browser.waitForAngularEnabled(false);
        driver.browser.get("http://leafground.com/");
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.element(driver.by.xpath("//h5[text()='Alert']")).click()
        // driver.element(driver.by.buttonText("Prompt Box")).click()

        var alert = driver.browser.switchTo().alert();
        alert.sendKeys("TestLeaf");
        // alert.dismiss();

        driver.browser.sleep(5000)






    })
})