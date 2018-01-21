import React from 'react';
import {Link} from 'react-router';

export default class Return_state extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>订单状态</h1>
                </header>
                <div style={{height:"1rem"}}></div>
                <section className="return_state">

                    <h2 className="state_0">订单提交成功！</h2>
                    <p>订单编号：201512121140</p>
                    <p>订单金额：<strong>0.00</strong></p>
                    <p>支付时间：<time>2015-12-12 11:41:38</time></p>
                    <p>
                        <Link to="order_list">查看订单</Link>
                        <Link to="home">返回首页</Link>

                    </p>
                </section>
            </div>
        )
    }
}