const driver = require("protractor")

describe("LeafGround Automation", ()=>{
    it("Learn Frames", async ()=>{

        driver.browser.waitForAngularEnabled(false);
        driver.browser.get("http://leafground.com/pages/frame.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)
        driver.browser.switchTo().frame(1)

        var innerFrame = driver.element(driver.by.id("frame2"))
        driver.browser.switchTo().frame(innerFrame)
        
        driver.element(driver.by.id("Click1")).click()
        
        driver.browser.switchTo().defaultContent()
        
        driver.element(driver.by.tagName("h1")).getText().then((text)=>{
            console.log(text);
        })


        driver.browser.sleep(3000)


    })
})