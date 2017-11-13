'use strict';
/**
 * 港股计算器对象
 * Jin 2017-11-06
 */
module.exports = class HKBroker{
    /**
     * [constructor 构造方法]
     * @param  {[object]} options [参数对象]
     * @return {[object]}         [港股券商对象]
     */
    constructor(options){
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
    }
    /**
     * [commission 获取佣金]
     * @param  {[number]} cost [总金额]
     * @param  {[number]} free [免佣？]
     * @return {[number]}      [佣金]
     */
    getCommission(cost , free){
        let commission = Math.max(this.commissionRate * cost , this.minCommission);
        return free ? 0 : Math.min(this.maxCommission , this.maxCommissionRate * cost , commission);
    }
    /**
     * [platform 获取平台使用费]
     * @return {[number]} [平台使用费]
     */
    getPlatform(){
        return this.platformFee;
    }
    /**
     * [payFee 获取交收费]
     * @param  {[number]} cost [总金额]
     * @return {[number]}      [交收费]
     */
    getPayFee(cost){
        let payFee = Math.max(this.payFeeRate * cost , this.minPayFee);
        return Math.min(this.maxPayFee , payFee);
    }
    /**
     * [tradingSystem 获取交易系统使用费]
     * @return {[number]} [交易系统使用费]
     */
    getTradingSystem(){
        return this.tradingSystemFee;
    }
    /**
     * [stampDuty 获取印花税]
     * @param  {[number]} cost [总金额]
     * @param  {[number]} instrument [窝轮？]
     * @return {[number]}      [印花税]
     */
    getStampDuty(cost , instrument){
        return instrument ? Math.max(Math.ceil(this.stampDutyRate * cost) , Math.ceil(this.minStampDutyFee)) : 0;
    }
    /**
     * [tradeFee 获取交易费]
     * @param  {[number]} cost [总金额]
     * @return {[number]}      [交易费]
     */
    getTradeFee(cost){
        return Math.max(this.tradeFeeRate * cost , this.minTradeFee);
    }
    /**
     * [transactionLevy 获取交易征费]
     * @param  {[number]} cost [总金额]
     * @return {[number]}      [交易征费]
     */
    getTransactionLevy(cost){
        return Math.max(this.transactionLevyRate * cost , this.minTransactionLevyFee);
    }
    /**
     * [getTotalCostInfo 获取总费用信息]
     * @param  {[number]} cost [总金额]
     * @return {[number]}      [总费用对象]
     */
    getTotalCostInfo(cost , free , instrument){
        return {
            commission: this.getCommission(cost , free),
            platform: this.getPlatform(),
            payFee: this.getPayFee(cost),
            tradingSystem: this.getTradingSystem(),
            stampDuty: this.getStampDuty(cost , instrument),
            tradeFee: this.getTradeFee(cost),
            transactionLevy: this.getTransactionLevy(cost)
        };
    }
    /**
     * [getTotalCost 获取手续总费用]
     * @param  {[number]} cost [总金额]
     * @param  {[number]} free [免佣]
     * @param  {[number]} instrument [正股|窝轮]
     * @return {[number]}      [手续总费用]
     */
    getTotalCost(cost , free , instrument){
        let totalCostInfo = this.getTotalCostInfo(cost , free , instrument);
        let totalCost = 0;

        for ( let costName in totalCostInfo ){
            totalCost += totalCostInfo[costName];
        }
        return totalCost;
    }
};
