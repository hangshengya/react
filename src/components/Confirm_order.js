import React from 'react';
import {Link} from 'react-router';

export default class Confirm_order extends React.Component {
    componentDidMount() {
        //payment style
        $(".payment dd label input[type='radio']").click(function () {
            $(this).parent().addClass("isTrue");
            $(this).parent().siblings().removeClass("isTrue");
        });
    }
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>确认订单</h1>
                </header>
                <div style={{ height: "1rem" }}></div>
                <aside className="confirmAddr">
                    <p>
                        <span>收货人：DeathGhost</span>
                        <span>1830927**73</span>
                    </p>
                    <address>陕西省西安市雁塔区某某大厦</address>
                    <Link to="address" className="iconfont">&#60;</Link>
                </aside>
                <dl className="payment">
                    <dt>选择支付方式</dt>
                    <dd>
                        <label><input type="radio" name="pay" />支付宝支付</label>
                        <label><input type="radio" name="pay" />微信支付</label>
                    </dd>
                </dl>
                <section className="order_msg">
                    <h2>我要留言</h2>
                    <textarea placeholder="选填(亲可以在这里添加想说的话)"></textarea>
                </section>

                <div style={{height:"1rem"}}></div>
                <aside className="btmNav">
                    <a style={{ background: '#64ab5b', color: 'white', textshadow: 'none' }}>合计：￥0.00</a>
                    <Link to="return_state" style={{ background: '#6bc75f', color: 'white', textshadow: 'none' }}>提交订单</Link>
                </aside>
            </div>
        )
    }
}