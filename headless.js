const {Builder, By, Key, until} = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let firefox = require('selenium-webdriver/firefox');

const width = 640;
const height = 480;

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(
        new chrome.Options().headless().windowSize({width, height}))
    // .setFirefoxOptions(
    //     new firefox.Options().headless().windowSize({width, height}))
    .build();

driver.get('http://www.google.com/ncr')
    .then(_ =>{
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
        console.log(By.name('q'))
    })
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(
        _ => driver.quit(),
        e => driver.quit().then(() => { throw e; }));


//-----------------------

//  let driver2 = new Builder()
//     .forBrowser('firefox')
//     // .setChromeOptions(
//     //     new chrome.Options().headless().windowSize({width, height}))
//     .setFirefoxOptions(
//         new firefox.Options().headless().windowSize({width, height}))
//     .build();

// driver2.get('http://www.google.com/ncr')
//     .then(_ =>{
//         driver2.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
//         console.log(By.name('q'))
//     })
//     .then(_ => driver2.wait(until.titleIs('webdriver - Google Search'), 1000))
//     .then(
//         _ => driver2.quit(),
//         e => driver2.quit().then(() => { throw e; }));
