//firefoxTest.js
var webdriver = require('selenium-webdriver');
var driver;
 
driver = new webdriver.Builder()
.forBrowser('firefox')
.build();
 
driver.get('https://www.google.co.jp/').then(function(){
  driver.quit();
});