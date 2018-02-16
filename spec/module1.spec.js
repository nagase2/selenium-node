


var fs = require('fs');


'use strict'

var mo1 = require('../lib/module1');

describe('Zaif Manager', () => {


  it('ticker情報からbidが取得できている', () => {


    m1 = new mo1.module1()
    m1.getValue() /*?*/
    spyOn(m1, 'getValue').and.returnValue({ a: 123, b: 456 });
    m1.getValue(999) /*?*/
    expect(m1.getValue).toHaveBeenCalled();

    expect(m1.getValue).toHaveBeenCalledWith(999);

    m1.getValue() /*?*/

    m3 = new mo1.module3()
    m3.getValue() /*?*/

    console.log('xxxx')
    var a = 1
    a

    //渡す前にモジュールの値を書き換えるサンプル
    spyOn(m1, 'calc').and.returnValue(9999);
    var parents = new mo1.Parents(m1)
    parents.calc(2, 5) /*?*/

    //内部のモジュールを強制的に書き換えるサンプル
    var parents = new mo1.Parents(m1)
    spyOn(parents.myModule1, 'calc').and.returnValue(12345);
    console.log(parents.calcWithOwnModule(2, 5)) /*?*/

    console.log(parents.calcWithOwnModule(3, 25)) /*?*/

  });

  afterEach(function () {

  })





});
