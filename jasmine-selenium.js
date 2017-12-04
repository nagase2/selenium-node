var wd = require("selenium-webdriver");

describe("e2e test", function() {
  var driver;
  beforeAll(function () {
    // デフォルトだと、5秒しか待ってくれないので、20秒くらい待たせる
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    driver = wd.Builder().forBrowser("chrome").build();
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
      return element.getText();
    })
    .then(function(text){
      expect(text).toBe("cst");
    })
    .then(done, done);
  });
});