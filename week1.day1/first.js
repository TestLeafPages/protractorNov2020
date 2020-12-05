const driver = require("protractor")
const expect = require("chai").expect

describe("Julimer Calculator", ()=>{
    it("Addition", async ()=>{

        // driver.browser.waitForAngularEnabled(false)
        browser.get("https://juliemr.github.io/protractor-demo/")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)
        
        driver.element(driver.by.model("first")).sendKeys("6")

        // To handle dropdowns
        // driver.element(driver.by.model("operator")).element(driver.by.css('value="SUBTRACTION"')).click()
        // driver.element(driver.by.model("operator")).$('[value="SUBTRACTION"]').click()

        driver.element(driver.by.model("second")).sendKeys("6")

        driver.element(driver.by.buttonText("Go!")).click()

        // driver.element(driver.by.tagName("h2")).getText().then(function textValue(txt){console.log(txt);})

        var result = await driver.element(driver.by.tagName("h2")).getText()

        expect(result).not.to.equal("12")

    })

    xit("Subtraction", async ()=>{

        // driver.browser.waitForAngularEnabled(false)
        driver.browser.get("https://juliemr.github.io/protractor-demo/")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)
        
        driver.element(driver.by.model("first")).sendKeys("6")

        // To handle dropdowns
        // driver.element(driver.by.model("operator")).element(driver.by.css('value="SUBTRACTION"')).click()
        driver.element(driver.by.model("operator")).$('[value="SUBTRACTION"]').click()

        driver.element(driver.by.model("second")).sendKeys("6")

        driver.element(driver.by.buttonText("Go!")).click()

        // driver.element(driver.by.tagName("h2")).getText().then(function textValue(txt){console.log(txt);})

        var result = await driver.element(driver.by.tagName("h2")).getText()

        // driver.element(driver.by.tagName("h2")).getText().then((txt)=>{console.log(txt);})

        console.log(result);


    })
})