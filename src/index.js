'use strict';

const Calculator = require('./calculator');

/**
 * [计算器函数]
 * @param  {[object]} stock  [股票]
 * @param  {[object]} config [自定义券商配置]
 * @return {[object]}        [计算器对象]
 */
module.exports = (stock , config , lang)=>{
    if ( typeof config === 'string' ){
        lang = config;
        config = undefined;
    }
    return new Calculator(stock , config , lang);
};
