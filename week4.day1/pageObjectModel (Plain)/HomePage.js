const driver = require("protractor")

class Home {

    async verifyText(){
        console.log(await driver.element(driver.by.tagName("h2")).getText());
    }

}

exports.HomePage = Home