'use strict';

module.exports = function( lang ){
    var langs = {
        default: {
            futu:{
                name:'富途证券(香港)',
                packageList:['旧套餐','套餐一','套餐二']
            },
            boci:{
                name:'中银国际'
            },
            guotaijunan:{
                name:'国泰君安'
            },
            cms:{
                name:'招商证券'
            },
            guoxin:{
                name:'国信证券'
            },
            icbc:{
                name:'工银亚洲'
            }
        },
        hk: {
            futu:{
                name:'富途證券(香港)',
                packageList:['舊套餐','套餐一','套餐二']
            },
            boci:{
                name:'中銀國際'
            },
            guotaijunan:{
                name:'國泰君安'
            },
            cms:{
                name:'招商證券'
            },
            guoxin:{
                name:'國信證券'
            },
            icbc:{
                name:'工銀亞洲'
            }
        },
        us: {
            futu: {
                name: 'FUTU HK',
                packageList: ['Old plan', 'Plan one', 'Plan two']
            },
            boci: {
                name: 'BOC International',
            },
            guotaijunan: {
                name: 'Guotai Junan Securities',
            },
            cms: {
                name: 'China Merchants Securities'
            },
            guoxin: {
                name: 'Guosen Securities'
            },
            icbc: {
                name: 'Industrial and Commercial Bank of China (Asia)'
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

            commissionRate:0.0005,//佣金费用比例
            minCommission:50,  //最少交易佣金

            platformFee:0,        //平台使用费

            payFeeRate:0.00005,//交收费比例
            minPayFee:5.5, //最少使用交收费
            maxPayFee:200,  //最多使用交收费

            tradingSystemFee:0,   //交易系统使用费

            stampDutyRate:0.001, //印花税比例
            minStampDutyFee:1, //最少印花税

            tradeFeeRate:0.00005, //交易费比例

            transactionLevyRate:0.000027//交易征费比例
        },{
            packageId:1,       //套餐Id
            packageName:names.futu.packageList[1],//套餐名称

            commissionRate:0.0003,//佣金费用比例
            minCommission:3,  //最少交易佣金

            platformFee:15,        //平台使用费

            payFeeRate:0.00002,//交收费比例
            minPayFee:2, //最少使用交收费
            maxPayFee:100,  //最多使用交收费

            tradingSystemFee:0.5,   //交易系统使用费

            stampDutyRate:0.001, //印花税比例
            minStampDutyFee:1, //最少印花税

            tradeFeeRate:0.00005, //交易费比例
            minTradeFee:0.01, //最少交易费

            transactionLevyRate:0.000027,//交易征费比例
            minTransactionLevyFee: 0.01 //最少交易征费
        },{
            packageId:2,       //套餐Id
            packageName:names.futu.packageList[2],//套餐名称

            commissionRate:0.0003,//佣金费用比例
            minCommission:3,  //最少交易佣金

            platformFee:30,        //平台使用费

            payFeeRate:0.00002,//交收费比例
            minPayFee:2, //最少使用交收费
            maxPayFee:100,  //最多使用交收费

            tradingSystemFee:0.5,   //交易系统使用费

            stampDutyRate:0.001, //印花税比例
            minStampDutyFee:1, //最少印花税

            tradeFeeRate:0.00005, //交易费比例
            minTradeFee:0.01, //最少交易费

            transactionLevyRate:0.000027,//交易征费比例
            minTransactionLevyFee: 0.01 //最少交易征费
        }]
    },{
        name:names.boci.name,    //券商名称
        spell:'BOCI',      //券商拼写
        packageList:[{
            commissionRate:0.002,//佣金费用比例
            minCommission:100,   //最少交易佣金

            stampDutyRate:0.001, //印花税比例
            minStampDutyFee:1, //最少印花税

            tradeFeeRate:0.00005, //交易费比例
            minTradeFee:0.01, //最少交易费

            transactionLevyRate:0.000027,//交易征费比例
            minTransactionLevyFee: 0.01 //最少交易征费
        }]
    },{
        name:names.guotaijunan.name,    //券商名称
        spell:'GuotaiJunan', //券商拼写
        packageList:[{
            commissionRate:0.0018,//佣金费用比例
            minCommission:100,  //最少交易佣金

            payFeeRate:0.00002,//交收费比例
            minPayFee:2, //最少使用交收费
            maxPayFee:100,  //最多使用交收费

            stampDutyRate:0.001, //印花税比例
            minStampDutyFee:1, //最少印花税

            tradeFeeRate:0.00005, //交易费比例
            minTradeFee:0.01, //最少交易费

            transactionLevyRate:0.000027,//交易征费比例
            minTransactionLevyFee: 0.01 //最少交易征费
        }]
    },{
        name:names.cms.name,    //券商名称
        spell:'CMS',      //券商拼写
        packageList:[{
            commissionRate:0.00225,//佣金费用比例
            minCommission:100,  //最少交易佣金

            payFeeRate:0.00002,//交收费比例
            minPayFee:2, //最少使用交收费
            maxPayFee:100,  //最多使用交收费

            stampDutyRate:0.001, //印花税比例
            minStampDutyFee:1, //最少印花税

            tradeFeeRate:0.00005, //交易费比例
            minTradeFee:0.01, //最少交易费

            transactionLevyRate:0.000027,//交易征费比例
            minTransactionLevyFee: 0.01 //最少交易征费
        }]
    },{
        name:names.guoxin.name,    //券商名称
        spell:'Guoxin',      //券商拼写
        packageList:[{
            commissionRate:0.0025,//佣金费用比例
            minCommission:100,  //最少交易佣金

            payFeeRate:0.00002,//交收费比例
            minPayFee:2, //最少使用交收费
            maxPayFee:100,  //最多使用交收费

            stampDutyRate:0.001, //印花税比例
            minStampDutyFee:1, //最少印花税

            tradeFeeRate:0.00005, //交易费比例
            minTradeFee:0.01, //最少交易费

            transactionLevyRate:0.000027,//交易征费比例
            minTransactionLevyFee: 0.01 //最少交易征费
        }]
    },{
        name:names.icbc.name,    //券商名称
        spell:'ICBC',      //券商拼写
        packageList:[{
            commissionRate:0.0015,//佣金费用比例
            minCommission:88,  //最少交易佣金

            payFeeRate:0.00002,//交收费比例
            minPayFee:2, //最少使用交收费
            maxPayFee:100,  //最多使用交收费

            stampDutyRate:0.001, //印花税比例
            minStampDutyFee:1, //最少印花税

            tradeFeeRate:0.00005, //交易费比例
            minTradeFee:0.01, //最少交易费

            transactionLevyRate:0.000027,//交易征费比例
            minTransactionLevyFee: 0.01 //最少交易征费
        }]
    }];
};
