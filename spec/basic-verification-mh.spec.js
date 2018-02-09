


const { Builder, By, Key, until } = require('selenium-webdriver');

let chrome = require('selenium-webdriver/chrome');
let firefox = require('selenium-webdriver/firefox');
var fs = require('fs');


'use strict'

describe('xManager', () => {
  //テストで毎回実施するやり方は？
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000
  const width = 800;
  const height = 1000;

  let driver
  beforeEach(function () {
    driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(
      new chrome.Options().headless().windowSize({ width, height }))
      .setFirefoxOptions(
      new firefox.Options().headless().windowSize({ width, height }))
      .build();
  });


  it('ticker情報からbidが取得できている', (done) => {
    driver.get('http://jaeeaap1.git.toyotsu.co.jp:93/jast-full-develop/')
    .then(_ => {
        //ログイン処理
        driver.findElement(By.name('username')).sendKeys('jc580')
        driver.findElement(By.name('password')).sendKeys('jc580', Key.RETURN)
        //console.log(By.name('q'))
      })
      //ココのコメント外すとエラーになる。
      // .then(_ => driver.takeScreenshot().then(
      //   function (image, err) {
      //     //Screenshot will be saved under current directory with name myscreenshot.png
      //     fs.writeFile('Loginscreen1.png', image, 'base64', function (error) {
      //       if (error != null) {
      //         console.log("Error occured while saving screenshot" + error);
      //       } else {
      //         done()
      //       }
      //     });
      //   })
      // )
    .then(_ => driver.wait(until.titleContains('index'), 2000)).then(_ => {
      driver.getTitle().then(title => console.log("jast title::",title/*?*/))
      //console.log(driver.findElement())
    })
    .then(_ => driver.takeScreenshot().then(
        function (image, err) {
          //Screenshot will be saved under current directory with name myscreenshot.png
          fs.writeFile('Loginscreen2.png', image, 'base64', function (error) {
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


  afterEach(function () {
    driver = null

  })
});
