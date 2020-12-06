const driver = require("protractor")
const assert = require("chai").

describe("LeafGround Automation", ()=>{
    it("Verify the Title", async ()=>{

        driver.browser.waitForAngularEnabled(false);
        driver.browser.get("http://leafground.com/")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        var expectedTitle = "TestLeaf - Selenium Playground";
        var actualTitle = await driver.browser.getTitle();

        assert.equal(expectedTitle, actualTitle);

    })
})
