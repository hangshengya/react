import React from 'react';
import Home_FloatCart from './Home_FloatCart';
import { Link } from 'react-router';
import {connect} from 'react-redux';

class Product_list extends React.Component {
    constructor(){
        super();
        this.state={
            data:[],
            id:'',
            uid:''
        }
    }
    componentDidUpdate() {
        $(".des_icon").click(function () {
            $(this).toggleClass("asc_icon");
        });
        $(".drop_icon").click(function () {
            $(".drop_list").toggle();
            $(".drop_list li a").click(function () {
                $(this).parents(".drop_list").hide();
            });
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
    componentDidMount(){
        this.show();
    }
    show(){
        let {showloading,hideloading} = this.props;
        showloading();
        this.setState({
            id:this.props.params.id,
            uid:this.props.params.uid
        })
        let id = this.props.params.id;
        let uid = this.props.params.uid;
        let url = 'http://localhost:8008/classify';
        fetch(url).then(
            res=>{return res.json()}
        ).then(
            res=>{
                hideloading();
                this.setState({
                data:res[0].data[id-1].classify[uid-1].goods
            })}
        )
    }
    render() {
        let data = this.state.data;
        let dataname = this.props.location.query.dataname;
        let {postcart} = this.props;
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>某类产品列表</h1>
                    <Link to="search" className="rt_searchIcon">&#63;</Link>
                </header>
                <div style={{ height: "1rem" }}></div>

                <ul className="sift_nav">
                    <li><a className="des_icon">价格</a></li>
                    <li><a className="des_icon">销量优先</a></li>
                    <li>
                        <a className="nav_li drop_icon">品牌筛选</a>
                        <ul className="drop_list">
                            <li><a>品牌名</a></li>
                            <li><a>品牌名</a></li>
                            <li><a>品牌名</a></li>
                            <li><a>品牌名</a></li>
                        </ul>
                    </li>
                </ul>

                <section className="productList">
                {
                    data?data.map((item,index)=>{
                        return (
                            <ul key={item.id}>
                            <li>
                                <Link to={{pathname:'product/'+this.state.id+'/'+this.state.uid+'/'+item.id,query:{dataname:dataname}}} className="goodsPic">
                                    <img src={item.img} />
                                </Link>
    
                                <div className="goodsInfor">
                                    <h2>
                                        <Link to={{pathname:'product/'+this.state.id+'/'+this.state.uid+'/'+item.id,query:{dataname:dataname}}}>{item.msg}</Link>
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
                        </ul>
                        )
                    }):''
                }
                   
                    <a className="more_btn">加载更多</a>
                </section>
                <Home_FloatCart />
            </div>
        )
    }
}

const mapStateToprops = (state,ownProps)=>{
    return{}
}
const mapDispatchToprops = (dispatch,ownProps)=>{
    return{
        showloading:()=>{dispatch({type:'SHOW_LOADING'})},
        hideloading:()=>{dispatch({type:'HIDE_LOADING'})},
        postcart:(data)=>{dispatch({type:'SHOP_CART',payload:data})}
    }
}

export default connect(
    mapStateToprops,
    mapDispatchToprops
)(Product_list)