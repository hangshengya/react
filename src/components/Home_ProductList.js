import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

class Home_ProductList extends React.Component {

    componentDidUpdate() {
        //product list:Tab
        $(".tab_proList dd").eq(0).show().siblings(".tab_proList dd").hide();
        $(".tab_proList dt a").eq(0).addClass("currStyle");
        $(".tab_proList dt a").click(function () {
            var liindex = $(".tab_proList dt a").index(this);
            $(this).addClass("currStyle").siblings().removeClass("currStyle");
            $(".tab_proList dd").eq(liindex).fadeIn(150).siblings(".tab_proList dd").hide();
        });
        //飞入动画，具体根据实际情况调整
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
        let data = this.props.listdata.data;
        let {postcart} = this.props;
        return (
            <dl className="tab_proList">
                <dt>
                    <a>热销</a>
                    <a>新品</a>
                    <a>打折</a>
                </dt>
                {
                    data ? data.map((item, index1) => {
                        return (
                            <dd key={index1}>
                                <ul>
                                    {
                                        item.map((item, index2) => {
                                            return (
                                                <li key={item.id}>
                                                    <Link to={{pathname:'product/'+(index1+1)+'/'+item.id,query:{dataname:this.props.dataname}}} className="goodsPic">
                                                        <img src={item.img} />
                                                    </Link>
                                                    <div className="goodsInfor">
                                                        <h2>
                                                            <Link to={{pathname:'product/'+(index1+1)+'/'+item.id,query:{dataname:this.props.dataname}}}>{item.msg}</Link>
                                                        </h2>
                                                        <p>
                                                            <del>{item.oldprice}</del>
                                                        </p>
                                                        <p>
                                                            <strong className="price">{item.nowprice}</strong>
                                                        </p>
                                                        <a className="addToCart" onClick={()=>{postcart(item)}}>&#126;</a>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </dd>
                        )
                    }) : ''
                }
            </dl>
        )
    }
}

const mapStateToprops = (state,ownProps)=>{
    return{}
}
const mapDispatchToprops = (dispatch,ownProps)=>{
    return{
        postcart:(data)=>{dispatch({type:'SHOP_CART',payload:data})}
    }
}

export default connect(
    mapStateToprops,
    mapDispatchToprops
)(Home_ProductList)