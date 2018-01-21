import React from 'react';
import { Link } from 'react-router';
import Home_FloatCart from './Home_FloatCart';

export default class Favorite extends React.Component {
    componentDidMount() {
        $(".addToCart").click(function () {
            $(".hoverCart a").html(parseInt($(".hoverCart a").html()) + 1);/*测试+1*/
            var shopOffset = $(".hoverCart").offset();
            var cloneDiv = $(this).parent().siblings(".goodsPic").clone();
            var proOffset = $(this).parent().siblings(".goodsPic").offset();
            cloneDiv.css({ "position": "absolute", "top": proOffset.top, "left": proOffset.left });
            $(this).parent().siblings(".goodsPic").parent().append(cloneDiv);
            cloneDiv.animate({
                width: 0,
                height: 0,
                left: shopOffset.left,
                top: shopOffset.top,
                opacity: 1
            }, "slow");
        });
    }
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>常购清单</h1>
                </header>
                <div style={{ height: "1rem" }}></div>
                <section className="productList">
                    <ul>
                        <li>
                            <Link to="product" className="goodsPic">
                                <img src="/src/upload/goods001.jpg" />
                            </Link>
                            <div className="goodsInfor">
                                <h2>
                                    <Link to="product">新鲜生菜两斤装特惠</Link>
                                </h2>
                                <p>
                                    <del>5.90</del>
                                </p>
                                <p>
                                    <strong className="price">3.90</strong>
                                </p>
                                <a className="addToCart">&#126;</a>
                            </div>
                        </li>
                    </ul>
                    <a className="more_btn">加载更多</a>
                </section>
                <Home_FloatCart/>
            </div>
        )
    }
}