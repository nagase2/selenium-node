//コンソール
'use strict'
console.log('message is 1');


module.export = function sample(sampleValue1) {
    console.log(sampleValue1);
}


var module1 = function () {
    console.log("モジュール2がよばれたぞ");
}
module1.prototype.getValue = function () {
    return "value123"
}
module1.prototype.calc = function (a, b) {
    return a * b
}

module.exports.module1 = module1;



var module3 = function () {
    console.log("モジュール3がよばれたぞ");
}
module3.prototype.getValue = function () {
    return "valude333"
}

module.exports.module3 = module3;

module.exports.sample4 = function () {
    console.log("モジュール4が呼ばれたぞ")
}

var Parents = function (mo1) {
    this.module1 = mo1
    this.myModule1 = new module1();
}
Parents.prototype.calc = function (a, b) {
    return this.module1.calc(a, b) * 100
}
Parents.prototype.calcWithOwnModule = function (a, b) {

    return this.module1.calc(a, b)
}


module.exports.Parents = Parents





// cal.js
function add(a, b) {
    return a + b;
};

module.exports.add = add;
module.exports.value2 = { val1: 1, val2: 2 }




