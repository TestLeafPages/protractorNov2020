const driver = require("protractor")

describe("W3Schools", ()=>{
    it("Learn Window Handling", async ()=>{

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("https://www.w3schools.com/js/js_popup.asp")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.element(driver.by.xpath("(//a[text()='Try it Yourself »'])[1]")).click()

        var windows = await driver.browser.getAllWindowHandles();
        console.log(windows);

        driver.browser.switchTo().window(windows[1])

        console.log(await driver.browser.getTitle());

    })
})