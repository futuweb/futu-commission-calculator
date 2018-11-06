# futu commission calculator（富途港美股佣金计算器）
富途佣金计算器默认会给出几个券商的佣金结果对比。

## npm install

```
npm install --save futu-commission-calculator
```

## Use

```js
var calculator = require('futu-commission-calculator');

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
let baba = calculator(babaConfig,'hk');

console.log('富途港股收费：' , tencent.futu , tencent.brokers);
console.log('富途美股收费：' , baba.futu , baba.brokers);
```


## calculator(stock [, config , lang])
* stock 股票配置文件
* config 自定义券商收费标准
* lang  语言环境  默认：大陆 ， 支持香港(hk), 支持欧美(us)


### stock
根据输入的股票进行佣金计算。

参数如下：

```
stockCode = stock.stockCode; //股票code
free = 'free' in stock ? !!stock.free : false;//免佣
market = stock.market || 1;//市场  港股：1 美股：2
price = stock.price || 0; //价格
shareNum = stock.shareNum || 1; //股数
instrument = stock.instrument && stock.instrument === 1 ? 1 : 0; //港股：正股：1|窝轮:0
cost = price * this.shareNum; //总费用
```

### config
券商佣金方案的配置

#### 港股参数列表

```js
this.name = options.name || 'unkown';         //券商名称
this.spell = options.spell || 'unkown';       //券商拼写

this.packageId = options.packageId || 0;      //套餐Id
this.packageName = options.packageName || 'unkown';//套餐名称

this.commissionRate = options.commissionRate || 0;//佣金费用比例
this.minCommission = options.minCommission || 0;  //最少佣金
this.maxCommission = options.maxCommission || Infinity;//最多佣金
this.maxCommissionRate = options.maxCommissionRate || Infinity;//最多佣金比例

this.platformFee = options.platformFee || 0;        //平台使用费

this.payFeeRate = options.payFeeRate || 0;//交收费比例
this.minPayFee = options.minPayFee || 0; //最少使用交收费
this.maxPayFee = options.maxPayFee || Infinity;  //最多使用交收费

this.tradingSystemFee = options.tradingSystemFee || 0;   //交易系统使用费

this.stampDutyRate = options.stampDutyRate || 0; //印花税比例
this.minStampDutyFee = options.minStampDutyFee || 0; //最少印花税

this.tradeFeeRate = options.tradeFeeRate || 0; //交易费比例
this.minTradeFee = options.minTradeFee || 0; //最少交易费

this.transactionLevyRate = options.transactionLevyRate || 0;//交易征费比例
this.minTransactionLevyFee = options.minTransactionLevyFee || 0; //最少交易征费
```

#### 美股参数列表

```js
this.name = options.name || 'unkown';         //券商名称
this.spell = options.spell || 'unkown';       //券商拼写

this.packageId = options.packageId || 0;      //套餐Id
this.packageName = options.packageName || 'unkown';//套餐名称

this.minStockPrice = options.minStockPrice || 0; //最低价格
this.paddingCommission = options.paddingCommission || 0;//附加钱

this.commissionRate = options.commissionRate || 0;//佣金费用比例
this.minCommission = options.minCommission || 0;  //最少佣金
this.maxCommission = options.maxCommission || Infinity;//最多佣金
this.maxCommissionRate = options.maxCommissionRate || Infinity;//最多佣金
this.commissionNeedPrice = options.commissionNeedPrice || false;//计算佣金是否要*股价

this.platformFee = options.platformFee || 0;        //平台使用费
this.platformFeeRate = options.platformFeeRate || 0;        //平台使用费
this.minPlatformFee = options.minPlatformFee || 0;  //最少平台使用费
this.maxPlatformFeeRate = options.maxPlatformFeeRate || Infinity;  //最多平台使用费比例

this.payFeeRate = options.payFeeRate || 0;//交收费比例
this.minPayFee = options.minPayFee || 0; //最少使用交收费
this.maxPayFee = options.maxPayFee || Infinity;  //最多使用交收费

this.secFeeRate = options.secFeeRate || 0; //证监会费比例
this.minSecFee = options.minSecFee || 0;//最低证监会费
this.maxSecFee = options.maxSecFee || Infinity;//最低证监会费

this.activityFeeRate = options.activityFeeRate || 0; //交易活动费比例
this.minActivityFee = options.minActivityFee || 0; //最少交易活动费
this.maxActivityFee = options.maxActivityFee || Infinity;//最多交易活动费
```

## 计算文档

[【港股】](./docs/hk-calc.md)

[【美股】](./docs/us-calc.md)


## browser export >= ie9