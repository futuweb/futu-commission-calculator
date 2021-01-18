'use strict';

module.exports = function(lang) {
    var langs = {
        default: {
            futu:{
                name:'富途证券(香港)',
                packageList:['旧套餐','套餐一','套餐二', '按股梯度式','企业套餐']
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
            td:{
                name:'TD(含史考特)'
            },
            // tiger:{
            //     name:'老虎证券'
            // }
            snowball: {
                name: '雪盈证券',
                packageList:['低佣金套餐','低利率套餐']
            }
        },
        hk: {
            futu:{
                name:'富途證券(香港)',
                packageList:['舊套餐','套餐一','套餐二', '按股梯度式','企業套餐']
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
            td:{
                name:'TD(含史考特)'
            },
            // tiger:{
            //     name:'老虎證券'
            // },
            snowball: {
                name: '雪盈證券',
                packageList:['低佣金套餐','低利率套餐']
            }
        },
        us: {
            futu: {
                name: 'FUTU HK',
                packageList: ['Old plan', 'Plan one', 'Plan two', 'Tiered plan', 'New plan']
            },
            boci: {
                name: 'BOC International',
            },
            guotaijunan: {
                name: 'Guotai Junan Securities',
            },
            fs: {
                name: 'Firstrade Securities'
            },
            td: {
                name: 'TD(including Scottrade)'
            },
            // tiger: {
            //     name: 'Tigertrade'
            // },
            snowball: {
                name: 'Snowball Securities',
                packageList:['Low-Commission plan','Low-Interest rate plan']
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
            maxCommissionRate:0.5,  //最多交易佣金比例

            payFeeRate:0.003,//交收费比例

            secFeeRate:0.0000221, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        },{
            packageId:1,          //套餐Id
            packageName:names.futu.packageList[1],//套餐名称

            commissionRate:0.0049,//佣金费用比例
            minCommission:0.99,  //最少交易佣金
            maxCommissionRate:0.5,  //最多交易佣金比例

            payFeeRate:0.003,//交收费比例

            platformFeeRate:0.005, //平台使用费比例
            minPlatformFee:1.00, //最少平台使用费
            maxPlatformFeeRate:0.005,//最多平台使用费比例

            secFeeRate:0.0000221, //证监会费比例
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

            secFeeRate:0.0000221, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        }, {
            packageId:3,          //套餐Id
            packageName:names.futu.packageList[3],//套餐名称

            commissionRate:0.0049,//佣金费用比例
            minCommission:0.99,  //最少交易佣金
            maxCommissionRate:0.5,  //最多交易佣金比例

            payFeeRate:0.003,//交收费比例

            platformFeeRate: {
                0: 0.01,
                500: 0.008,
                1000: 0.007,
                5000: 0.006,
                10000: 0.0055,
                50000: 0.005,
                200000: 0.0045,
                500000: 0.004,
                1000000: 0.0035,
                5000000: 0.003,
            },
            minPlatformFee:1.00, //最少平台使用费
            maxPlatformFeeRate:0.5,//最多平台使用费比例

            secFeeRate:0.0000221, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.95  //最多交易活动费
        },{
            packageId:4,          //套餐Id
            packageName:names.futu.packageList[4],//套餐名称

            commissionRate:0.0039,//佣金费用比例
            minCommission:0.99,  //最少交易佣金
            maxCommissionRate:0.5,  //最多交易佣金比例
            minPayFee:0.99, //最少使用交收费
            payFeeRate:0.003841,//交收费比例

            platformFeeRate: 0.004,
            minPlatformFee:1.00, //最少平台使用费
            maxPlatformFeeRate:0.5,//最多平台使用费比例

            secFeeRate:0.0000221, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.95  //最多交易活动费
        }]
    },{
        name:names.boci.name,    //券商名称
        spell:'BOCI',      //券商拼写
        packageList:[{
            commissionRate:0.01,//佣金费用比例
            minCommission:25,  //最少交易佣金
            commissionNeedPrice: true, //计算佣金是否要*股价

            secFeeRate:0.0000221, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        }]
    },{
        name:names.guotaijunan.name,    //券商名称
        spell:'GuotaiJunan', //券商拼写
        packageList:[{
            commissionRate:0.0015,//佣金费用比例
            minCommission:15,  //最少交易佣金
            commissionNeedPrice: true, //计算佣金是否要*股价

            secFeeRate:0.0000221, //证监会费比例
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

            secFeeRate:0.0000221, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        }]
    },{
        name:names.td.name,    //券商名称
        spell:'TD',      //券商拼写
        packageList:[{
            minCommission:6.95,  //最少交易佣金

            secFeeRate:0.0000221, //证监会费比例
            minSecFee:0.01,//最低证监会费

            activityFeeRate:0.000119, //交易活动费比例
            minActivityFee:0.01, //最少交易活动费
            maxActivityFee:5.59  //最多交易活动费
        }]
    },
    // {
    //     name:names.tiger.name,    //券商名称
    //     spell:'Tiger',      //券商拼写
    //     packageList:[{
    //         commissionRate:0.01,//佣金费用比例
    //         minCommission:2.99,  //最少交易佣金
    //         maxCommissionRate:0.01,  //最多交易佣金比例

    //         payFeeRate:0.003,//交收费比例

    //         secFeeRate:0.0000221, //证监会费比例
    //         minSecFee:0.01,//最低证监会费

    //         activityFeeRate:0.000119, //交易活动费比例
    //         minActivityFee:0.01, //最少交易活动费
    //         maxActivityFee:5.59  //最多交易活动费
    //     }]
    // }
    {
        name: names.snowball.name,
        spell: 'SnowBall',
        packageList: [{
            packageId: 0,
            packageName: names.snowball.packageList[0],
            commissionRate:0.002,//佣金费用比例
            minCommission:0.99,  //最少交易佣金
        }, {
            packageId: 0,
            packageName: names.snowball.packageList[1],
            commissionRate:0.008,//佣金费用比例
            minCommission:0.99,  //最少交易佣金
        }]
    }];
};
