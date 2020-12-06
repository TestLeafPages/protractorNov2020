const driver = require("protractor")
const file = require("fs")

describe("LeafGround Automation", ()=>{
    it("Learn Frames", ()=>{

        driver.browser.waitForAngularEnabled(false);
        driver.browser.get("http://leafground.com/pages/frame.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.browser.takeScreenshot().then(img => {   // Date JS
            var stream = file.createWriteStream("./snaps/001"+Math.random()+".png")
            stream.write(new Buffer(img, 'base64'))
            stream.end();
        })

    })
})