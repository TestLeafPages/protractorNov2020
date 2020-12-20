const driver = require("protractor")
const home = require("./HomePage.js")

class Login {

    launchApp(){
        driver.browser.manage().window().maximize()
        return this;
    }

    enterUsername(username){
        driver.element(driver.by.id("username")).sendKeys(username)
        return this;
    }

    enterPassword(password){
        driver.element(driver.by.id("password")).sendKeys(password)
        return this;
    }

    clickLogin(){
        driver.element(driver.by.className("decorativeSubmit")).click()
        return new home.HomePage()
    }

}

exports.LoginPage = Login