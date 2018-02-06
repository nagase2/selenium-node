const { Builder, By, Key, until } = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let firefox = require('selenium-webdriver/firefox');
var fs = require('fs');

const width = 800;
const height = 1000;

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(
    new chrome.Options().headless().windowSize({ width, height }))
    // .setFirefoxOptions(
    //     new firefox.Options().headless().windowSize({width, height}))
    .build();

driver.get('http://www.google.com/ncr')
    .then(_ => {
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
        console.log(By.name('q'))
    })
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000)).then(_ => {
        driver.getTitle().then(title => console.log(title))
    }).then(_ => driver.takeScreenshot().then(
        function (image, err) {
            //Screenshot will be saved under current directory with name myscreenshot.png
            fs.writeFile('./myscreenshot.png', image, 'base64', function (error) {
                if (error != null)
                    console.log("Error occured while saving screenshot" + error);
            });
        })
    )
    .then(
    _ => driver.quit(),
    e => driver.quit().then(() => { throw e; }));


//-----------------------

let driver2 = new Builder()
    .forBrowser('firefox')
    .setChromeOptions(
    new chrome.Options().headless().windowSize({ width, height }))
    .setFirefoxOptions(
    new firefox.Options().headless().windowSize({ width, height }))
    .build();

driver2.get('https://developer.mozilla.org/en-US/')
    .then(_ => {
        driver2.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
        //console.log(By.name('q'))
    })
    .then(_ => driver2.wait(until.titleIs('MDN Web Docs'), 4000)).then(_ => {
        driver2.getTitle().then(title => console.log(title))
    }).then(_ => driver2.takeScreenshot().then(
        function (image, err) {
            //Screenshot will be saved under current directory with name myscreenshot.png
            fs.writeFile('./myscreenshot2.png', image, 'base64', function (error) {
                if (error != null)
                    console.log("Error occured while saving screenshot" + error);
            });
        })
    )
    .then(
    _ => driver2.quit(),
    e => driver2.quit().then(() => { throw e; }))
    .catch((error) => {
        console.log(err)
    })    

