'use strict';

var calculator = require('../dist');

var tencentConfig = {
    stockCode: '00700',
    market:1,
    price:377,
    shareNum: 100,
    instrument:0,
    free:true
};

var babaConfig = {
    stockCode: 'BABA',
    market:2,
    price:200,
    shareNum: 100,
    free: false
};

let tencent = calculator(tencentConfig);
let baba = calculator(babaConfig);

console.log(JSON.stringify(tencent.futu));
console.log('\n-------------------------------------\n');
console.log(JSON.stringify(baba.futu));
