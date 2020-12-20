const driver = require("protractor")
const loginPage = require("./LoginPage")
const readExcel = require("./utils/readExcel")

describe("TC001", ()=>{

    beforeEach("Pre condition", ()=>{
        driver.browser.waitForAngularEnabled(false);
        driver.browser.get("http://leaftaps.com/opentaps/control/main")
        driver.browser.manage().timeouts().implicitlyWait(6000)
    })

    new readExcel.readExcel().getExcelData("./utils/data.xlsx", "Sheet1").forEach(data => {

    it("Login functionality", ()=>{
        new loginPage.LoginPage()
        .launchApp()
        .enterUsername(data.Username)
        .enterPassword(data.Password)
        .clickLogin()
        .verifyText();
    })

    });

    afterEach("Post condition", ()=>{
        driver.element(driver.by.className("decorativeSubmit")).click()
    })    

})