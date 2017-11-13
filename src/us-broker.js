'use strict';
/**
 * 美股计算器对象
 * Jin 2017-11-06
 */
module.exports = class USBroker{
    /**
     * [constructor 构造方法]
     * @param  {[object]} options [参数对象]
     * @return {[object]}         [美股券商对象]
     */
    constructor(options){
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
    }
    /**
     * [getCommission 获取交易佣金]
     * @param  {[number]} cost     [总金额]
     * @param  {[number]} shareNum [股数]
     * @param  {[number]} price    [股价]
     * @param  {[number]} free     [免佣？]
     * @return {[number]}          [交易佣金]
     */
    getCommission(cost , shareNum , price , free){
        let commission = Math.max(this.commissionRate * shareNum , this.minCommission);
        if ( this.minStockPrice > 0 && price < this.minStockPrice){
            commission += shareNum * this.paddingCommission;
        }
        return free ? 0 : Math.min(this.maxCommission , this.maxCommissionRate * cost , commission);
    }
    /**
     * [getPlatform 获取平台使用费]
     * @param  {[number]} cost     [总金额]
     * @param  {[number]} shareNum [股数]
     * @return {[number]}          [平台使用费]
     */
    getPlatform(cost , shareNum){
        let platformFee = Math.max(this.platformFee , this.platformFeeRate * shareNum , this.minPlatformFee);
        return Math.min(this.maxPlatformFeeRate * cost , platformFee);
    }
    /**
     * [getPayFee 获取交收费]
     * @param  {[number]} cost     [总金额]
     * @param  {[number]} shareNum [股数]
     * @return {[number]}          [交收费]
     */
    getPayFee(cost , shareNum){
        let payFee = Math.max(this.payFeeRate * shareNum , this.minPayFee);
        return Math.min(this.maxPayFee , payFee);
    }
    /**
     * [getSecFee 获取证监会费]
     * @param  {[number]} cost     [总金额]
     * @param  {[number]} shareNum [股数]
     * @return {[number]}          [证监会费]
     */
    getSecFee(cost){
        let secFee = Math.max(this.secFeeRate * cost , this.minSecFee);
        return Math.min(this.maxSecFee , secFee);
    }
    /**
     * [getActivityFee 获取交易活动费]
     * @param  {[number]} shareNum [股数]
     * @return {[number]}          [交易活动费]
     */
    getActivityFee(shareNum){
        let activityFee = Math.max(this.activityFeeRate * shareNum , this.minActivityFee);
        return Math.min(this.maxActivityFee , activityFee);
    }
    /**
     * [getTotalCostInfo 获取总费用信息]
     * @param  {[number]} cost     [总金额]
     * @param  {[number]} shareNum [股数]
     * @param  {[number]} price    [股价]
     * @param  {[number]} free     [免佣？]
     * @return {[number]}          [总费用对象]
     */
    getTotalCostInfo(cost , shareNum , price , free){
        return {
            commission: this.getCommission(cost , shareNum , price , free),
            platform: this.getPlatform(cost , shareNum),
            payFee: this.getPayFee(cost , shareNum),
            secFee: this.getSecFee(cost),
            activityFee: this.getActivityFee(shareNum)
        };
    }
    /**
     * [getTotalCost 获取手续总费用]
     * @param  {[number]} cost     [总金额]
     * @param  {[number]} shareNum [股数]
     * @param  {[number]} price    [股价]
     * @param  {[number]} free     [免佣？]
     * @return {[number]}          [手续总费用]
     */
    getTotalCost(cost , shareNum , price , free){
        let totalCostInfo = this.getTotalCostInfo(cost , shareNum , price , free);
        //只算佣金和交收费
        return totalCostInfo.commission + totalCostInfo.payFee;
    }
};
