


const { Builder, By, Key, until } = require('selenium-webdriver');

let chrome = require('selenium-webdriver/chrome');
let firefox = require('selenium-webdriver/firefox');
var fs = require('fs');


'use strict'


describe('Zaif Manager', () => {
  //テストで毎回実施するやり方は？
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000
  beforeEach(function () {


  });

  it('ticker情報からbidが取得できている', (done) => {

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
        //console.log(By.name('q'))
      })
      .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000)).then(_ => {
        driver.getTitle().then(title => console.log(title/*?*/))
      }).then(_ => driver.takeScreenshot().then(
        function (image, err) {
          //Screenshot will be saved under current directory with name myscreenshot.png
          fs.writeFile('./myscreenshot.png', image, 'base64', function (error) {
            if (error != null) {
              console.log("Error occured while saving screenshot" + error);
            } else {
              done()
            }
          });
        })
      )
      .then(
      _ => driver.quit(),
      e => driver.quit().then(() => { throw e; }));

  });



});
