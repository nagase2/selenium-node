const {Builder, By, Key, until} = require('selenium-webdriver');

this.timeout(120000);
let driver = new Builder().forBrowser('firefox').build();

//let driver = new Builder().forBrowser("chrome").build();

console.log("start connecting to google.");

driver.get('https://www.google.com');
driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver - Google 検索'), 5000);
console.log('終了します...');

driver.close();
driver.quit();
