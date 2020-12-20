const driver = require("protractor")
const home = require("./HomePage.js")
const base = require("./ProtractorBase.js")

class Login extends base.ProtractorBase{

    launchApp(){
        this.maximizeBrowser()
        // driver.browser.manage().timeouts().implicitlyWait(3000)
        applyImpliWait(3000)
        return this;
    }

    switchIntoANewWindow(){
        switchToWindow(2)
        this.type(this.locateElement("id","username"), "demosalesmanager")
    }

    enterUsername(userName){
        // driver.element(driver.by.id("username")).sendKeys(userName)
        // this.type(this.locateElement("id","username1"), userName)
        var text = this.locateElement("xpath", "//h2").getText()
        console.log(text);
        return this;
    }

    enterPassword(data){
        // driver.element(driver.by.id("password")).sendKeys(data)
        this.type(this.locateElement("id","password"), data)
        return this;
    }

    clickLogin(){
        // driver.element(driver.by.className("decorativeSubmit")).click()
        this.click(this.locateElement("class","decorativeSubmit"))
        return this;
    }

}

exports.Login = Login