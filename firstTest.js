const webdriver = require('selenium-webdriver')
    ,By = webdriver.By
    ,until = webdriver.until
    ,t = require('selenium-webdriver/testing')
    ;
const expect = require('expect.js');
const assert = require('assert');

t.describe('ログインフォーム テストデモ', function () {
  let driver;

  // 全テストの実行前に実行する処理
  t.before(function () {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
  });

  // 全テストの実行後に実行する処理
  t.after(function () {
   driver.quit();
  });
 // テスト
  t.it('パスワード未入力テスト', function () {
    driver.get('https://qiita.com/tenten0213/items/7ca15ce8b54acc3b5719').then(function () {

      // パスワード入力せずにSubmitする
  //    driver.findElement(By.id('login_name')).sendKeys('hoge');                           // idで要素を取得して値をセット
  //    driver.findElement(By.xpath('//input[@value="Login" and @type="submit"]')).click(); // xpathで要素を取得してクリック実行
/*
      driver.wait(until.elementLocated(By.id('error')), 2000)                             // 指定要素が取得できるまでwait
        .then(function (elm) {
          elm.getText()                                                                   // 要素のテキストを取得
            .then(function (text){
              expect(text).to.be('ログイン名が存在しません。');
            });
        });
        */
    });
  });

});