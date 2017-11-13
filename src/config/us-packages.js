'use strict';

module.exports = function(lang) {
    var langs = {
        default: {
            futu:{
                name:'富途证券',
                packageList:['旧套餐','套餐一','套餐二']
            },
            boci:{
                name:'中银国际'
            },
            guotaijunan:{
                name:'国泰君安'
            },
            fs:{
                name:'第一证券'
            },
            scott:{
                name:'史考特'
            },
            tiger:{
                name:'老虎证券'
            }
        },
        hk: {
            futu:{
                name:'富途證券',
                packageList:['舊套餐','套餐一','套餐二']
            },
            boci:{
                name:'中銀國際'
            },
            guotaijunan:{
                name:'國泰君安'
            },
            fs:{
                name:'第一證券'
            },
            scott:{
                name:'史考特'
            },
            tiger:{
                name:'老虎證券'
            }
        }
    };

    var names = lang ? langs[lang] : langs.default;

    return [{
        name:names.futu.name,    //券商名称
        spell:'FUTU',       //券商拼写
        packageList:[{
            packageId:0,          //套餐Id
            packageName:names.futu.packageList[0],//套餐名称

            commissionRate:0.01,//佣金费用比例
            minCommission:1.99,  //最少交易佣金
            maxCommissionRate:0.005,  //最多交易佣金比例

            payFeeRate:0.003,//交收费比例

            secFeeRate:0.0000231, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        },{
            packageId:1,          //套餐Id
            packageName:names.futu.packageList[1],//套餐名称

            commissionRate:0.0049,//佣金费用比例
            minCommission:0.99,  //最少交易佣金
            maxCommissionRate:0.005,  //最多交易佣金比例

            payFeeRate:0.003,//交收费比例

            platformFeeRate:0.005, //平台使用费比例
            minPlatformFee:1.00, //最少平台使用费
            maxPlatformFeeRate:0.005,//最多平台使用费比例

            secFeeRate:0.0000231, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        },{
            packageId:2,          //套餐Id
            packageName:names.futu.packageList[2],//套餐名称

            commissionRate:0,//佣金费用比例
            minCommission:5,  //最少交易佣金

            payFeeRate:0.003,//交收费比例
            minPayFee:3, //最少使用交收费

            platformFee:0,        //平台使用费

            secFeeRate:0.0000231, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        }]
    },{
        name:names.boci.name,    //券商名称
        spell:'BOCI',      //券商拼写
        packageList:[{
            commissionRate:0.0012,//佣金费用比例
            minCommission:20,  //最少交易佣金

            secFeeRate:0.0000231, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        }]
    },{
        name:names.guotaijunan.name,    //券商名称
        spell:'GuotaiJunan', //券商拼写
        packageList:[{
            commissionRate:0.0012,//佣金费用比例
            minCommission:20,  //最少交易佣金

            secFeeRate:0.0000231, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        }]
    },{
        name:names.fs.name,    //券商名称
        spell:'FS',        //券商拼写
        packageList:[{
            minCommission:2.95,  //最少交易佣金
            minStockPrice:1.00, //最低股价
            paddingCommission:0.005,//附加佣金

            secFeeRate:0.0000231, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        }]
    },{
        name:names.scott.name,    //券商名称
        spell:'Scott',      //券商拼写
        packageList:[{
            minCommission:6.95,  //最少交易佣金

            secFeeRate:0.0000231, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        }]
    },{
        name:names.tiger.name,    //券商名称
        spell:'Tiger',      //券商拼写
        packageList:[{
            commissionRate:0.01,//佣金费用比例
            minCommission:2.99,  //最少交易佣金
            maxCommissionRate:0.01,  //最多交易佣金比例

            payFeeRate:0.003,//交收费比例

            secFeeRate:0.0000231, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        }]
    }];
};
