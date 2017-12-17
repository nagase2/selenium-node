//jasmineを使ったシンプルなseleniumテスト

var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder()
.withCapabilities(webdriver.Capabilities.chrome())
.build();


describe("e2e test", function() {

  
  beforeAll(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    
  });
  afterAll(function() {
   
  });

  it("should get google.com", function(done) {




    driver.get("http://google.com");

    var searchField = driver.findElement(webdriver.By.name('q'));
    searchField.sendKeys('webdriver',webdriver.Key.RETURN);

    driver.wait(webdriver.until.titleIs('webdriver - Google 検索'), 8000);

          //ログイン後のタイトルチェック
        driver.getTitle().then(function(title){
            expect(title).toBe('webdriver - Google 検索');
        });
  //ログイン後のタイトルチェック
  var item = driver.findElement(webdriver.By.id('lst-ib'));
  console.log(item);
  
        expect(item).toBe('q');

  
     //終了
     driver.quit().then(function(){
      //非同期実行
      done();
    });
  
  });
});