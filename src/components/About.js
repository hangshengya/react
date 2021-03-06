import React from 'react';

import '../css/about.css';
export default class About extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>关于我们</h1>
                </header>
                <div style={{height:"1rem"}}></div>
                <div className="article">
                    <p>鑫通达水产商城成立于2013年，集水产、生擒、畜牧、调味品和各种冷冻产品为一体的批发销售商城；公司拥有自己的冷库配送系统，可提供冷藏代存业务。</p>
                    <p>本商城以诚信为本，在商品采购、仓储、配送等环节严格把关，保障商品和服务的高质量。并严格遵守国家相关“三包服务”法律法规，让客户放心购买。</p>
                    <p>送货上门，配送快捷并提供准时、准点送达服务以满足顾客的收货需求。提供物流查询，货到付款等相关服务。</p>
                    <p><b>配送服务说明：</b></p>
                    <p>限时达：当日上午11:00前的订单则当日送达；夜里11:00前的订单次日15:00送达。</p>
                    <p>次日达：在一定的时间点肉点之前提交的订单，将于次日送达。</p>
                    <div className="link_li">
                        <dl>
                            <dt>购物指南</dt>
                            <dd><a>购物流程</a></dd>
                            <dd><a>联系电话</a></dd>
                        </dl>
                        <dl>
                            <dt>配送方式</dt>
                            <dd><a>限时达</a></dd>
                            <dd><a>次日达</a></dd>
                        </dl>
                        <dl>
                            <dt>支付方式</dt>
                            <dd><a>货到付款</a></dd>
                            <dd><a>银行转账</a></dd>
                        </dl>
                        <dl>
                            <dt>售后服务</dt>
                            <dd><a>退货说明</a></dd>
                            <dd><a>售后电话</a></dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
}