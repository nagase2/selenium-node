//jasmineを使ったシンプルなseleniumテスト

var webdriver = require("selenium-webdriver");

describe("e2e test", function() {
  var driver;
  beforeAll(function () {
    // デフォルトだと、5秒しか待ってくれないので、20秒くらい待たせる
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    driver = new wd.Builder().forBrowser("chrome").build();
  });
  afterAll(function() {
    driver.quit();
  });

  it("should get google.com", function(done) {
    driver.get("http://google.com")
    .then(function() {
      return driver.findElement(by.id("viewport"));
    })
    .then(function(element) {
      console.log(element.getText());
      return element.getText();
    })
    .then(function(text){
      expect(text).toBe("cst");
    })
    .then(done, done);
  });

  it("should get google.com2", function(done) {
    driver.get("http://google.com")
    .then(function() {
  
      
      return driver.findElement(by.name('q'));
    })
    .then(function(element) {
      element.sendKeys('webdriver', Key.RETURN);
      driver.wait(until.titleIs('webdriver - Google 検索'), 5000);
      console.log('xxxxx'+element.getText());
      
      return element.getText();
    })
    .then(function(text){
      expect(text).toBe("cst");
    })
    .then(done, done);
  });
  
});