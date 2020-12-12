const driver = require("protractor")

describe("Learn Hooks", ()=>{

    beforeEach("Precondition", ()=>{
        driver.browser.get("https://juliemr.github.io/protractor-demo/")
        driver.browser.manage().window().maximize();
        driver.browser.manage().timeouts().implicitlyWait(3000)
    })

    it("Addition in Juliemr", async ()=>{
        driver.element(driver.by.model("first")).sendKeys("5")
        driver.element(driver.by.model("second")).sendKeys("5")
        driver.element(driver.by.buttonText("Go!")).click()
    })

    it("Subtracton in Juliemr", async ()=>{
        driver.element(driver.by.model("first")).sendKeys("10")
        driver.element(driver.by.model("operator")).$('[value="SUBTRACTION"]').click
        driver.element(driver.by.model("second")).sendKeys("10")
        driver.element(driver.by.buttonText("Go!")).click()
    })

    afterEach("Postcondition", async ()=>{
        var result = await driver.element(driver.by.tagName("h2")).getText()
        console.log( result);
    })

})