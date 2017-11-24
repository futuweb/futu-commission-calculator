'use strict';

const HKBroker = require('./hk-broker');
const USBroker = require('./us-broker');

const hkPackagesConfig = require('./config/hk-packages');
const usPackagesConfig = require('./config/us-packages');

/**
 * 计算器
 * jin 2017-11-07
 */
module.exports = class Calculator{
    constructor(stock , config , lang){
        if ( typeof config === 'string' ){
            lang = config;
            config = undefined;
        }
        this.stockCode = stock.stockCode; //股票code
        this.free = 'free' in stock ? !!stock.free : false;//免佣
        this.market = stock.market || 1;//市场  港股：1 美股：2
        this.price = stock.price || 0; //价格
        this.shareNum = stock.shareNum || 1; //股数
        this.instrument = stock.instrument && stock.instrument === 1 ? 1 : 0; //港股：正股：1|窝轮:0
        this.cost = this.price * this.shareNum; //总费用
        this.config = this.market !== 1 ? usPackagesConfig(lang) : hkPackagesConfig(lang);//券商配置
        this.config = typeof config === 'object' ? config : this.config;
    }
    /**
     * [brokers 所有券商]
     * @return {[Array]} [券商收费数组]
     */
    get brokers(){
        let brokers = this.getBrokerConfigBySpell();
        let brokerArr = [];
        for ( let i = 0; i < brokers.length ; i++ ){
            brokerArr.push(this.getBrokerInfo(brokers[i] , this.getBrokerList(brokers[i])));
        }
        return brokerArr;
    }
    /**
     * [futu 获取富途]
     * @return {[Object]} [富途收费详情]
     */
    get futu(){
        let broker = this.getBrokerConfigBySpell('FUTU');
        return this.getBrokerInfo(broker , this.getBrokerList(broker));
    }
    /**
     * [getBrokerInfo 获取券商收费信息]
     * @param  {[object]} broker     [券商]
     * @param  {[Array]} brokerList [券商收费列表]
     * @return {[object]}            [收费详情]
     */
    getBrokerInfo(broker , brokerList){
        let brokerInfo = {
            spell:broker.spell,
            name:broker.name,
            packageList:[]
        };
        for ( let i = 0 ; i < brokerList.length ; i++ ){
            brokerInfo.packageList.push({
                broker: brokerList[i],
                totalCost: this.getTotalCost(brokerList[i]),
                totalCostInfo: this.getTotalCostInfo(brokerList[i]),
                totalCostSource: this.getTotalCostSource(brokerList[i])
            });
        }
        return Object.assign({} , brokerInfo);
    }
    /**
     * [getTotalCost 获取总手续费]
     * @param  {[object]} broker [券商]
     * @return {[number]}        [总手续费]
     */
    getTotalCost(broker){
        return  this.market !== 1 ? broker.getTotalCost(this.cost , this.shareNum , this.price , this.free)
                                    : broker.getTotalCost(this.cost , this.free , this.instrument);
    }
    /**
     * [getTotalCostInfo 获取总手续费]
     * @param  {[object]} broker [券商]
     * @return {[object]}        [总手续费对象]
     */
    getTotalCostInfo(broker){
        return  this.market !== 1 ? broker.getTotalCostInfo(this.cost , this.shareNum , this.price , this.free)
                                    : broker.getTotalCostInfo(this.cost , this.free , this.instrument);
    }
    /**
     * [getTotalCostSource 获取费用原始数据]
     * @param  {[object]} broker [券商]
     * @return {[object]}        [总手续费对象]
     */
    getTotalCostSource(broker){
        return  this.market !== 1 ? broker.getTotalCostSource(this.cost , this.shareNum , this.price , this.free)
                                    : broker.getTotalCostSource(this.cost , this.free , this.instrument);
    }
    /**
     * [getBrokerConfigBySpell 根据spell获取券商]
     * @param  {[string|undefined]} spell [券商拼写]
     * @return {[object|Array]}       [配置]
     */
    getBrokerConfigBySpell(spell){
        for(let i = 0 ; i < this.config.length ; i++ ){
            if ( spell && spell.toUpperCase() === (this.config[i].spell).toUpperCase() ){
                return this.config[i];
            }
        }
        return  this.config;
    }
    /**
     * [getBrokerList 获取券商列表]
     * @param  {[object]} broker [券商]
     * @return {[array]}         [券商收费对象数组]
     */
    getBrokerList(broker){
        let brokerList = [];
        for ( let i = 0 ; i < broker.packageList.length ; i++ ){
            let options = Object.assign({},broker.packageList[i] , {spell:broker.spell,name:broker.name});
            brokerList.push(this.createBroker(options));
        }
        return brokerList;
    }
    /**
     * [createBroker 创建券商]
     * @param  {[object]} options [配置]
     * @return {[object]}         [券商对象]
     */
    createBroker(options){
        return this.market !== 1 ? new USBroker(options) : new HKBroker(options);
    }
};
