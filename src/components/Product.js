import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Product extends React.Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidUpdate() {
        $(".btmNav a:first").click(function () {
            $(".topCart em").html(parseInt($(".topCart em").html()) + 1);
        });
    }
    componentDidMount(){
        this.show();
    }
    show(){
        let {showloading,hideloading} = this.props;
        showloading();
        let id = this.props.params.id;
        let uid = this.props.params.uid;
        let sid = this.props.params.sid;
        let url = `http://localhost:8008/${this.props.location.query.dataname}`;
        console.log(url)
        fetch(url).then(
            res=>{return res.json()}
        ).then(
            res=>{
                hideloading();

                sid?this.setState({
                    data:res[0].data[id-1].classify[uid-1].goods[sid-1]
                }):this.setState({
                    data:res[0].data[id-1][uid-1]
                })
            }
        )
    }
    render() {
        let data = this.state.data;
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>产品详情</h1>
                    <Link to="cart" className="topCart"><em>0</em></Link>
                </header>
                <div style={{ height: "1rem" }}></div>
                <div className="pro_bigImg">
                    <img src={data.img} />
                </div>

                <section className="pro_baseInfor">
                    <h2>{data.msg}</h2>
                    <p>
                        <strong>{data.nowprice}</strong>
                        <del>{data.oldprice}</del>
                    </p>
                </section>

                <dl className="pro_attr">
                    <dt>产品属性信息</dt>
                    <dd>
                        <ul>
                            <li>
                                <span>上市时间</span>
                                <em>2015年09月</em>
                            </li>
                            <li>
                                <span>产品规格</span>
                                <em>1斤装</em>
                            </li>
                            <li>
                                <span>产品重量</span>
                                <em>0.5kg</em>
                            </li>
                            <li>
                                <span>包装方式</span>
                                <em>散装</em>
                            </li>
                            <li>
                                <span>保质期</span>
                                <em>6个月</em>
                            </li>
                            <li>
                                <span>所属品牌</span>
                                <em>三星</em>
                            </li>
                        </ul>
                    </dd>
                </dl>

                <div style={{ height: "1rem" }}></div>
                <aside className="btmNav">
                    <a style={{ background: '#64ab5b', color: 'white', textshadow: 'none' }}>加入购物车</a>
                    <a style={{ background: '#87a983', color: 'white', textshadow: 'none' }}>加入常购单</a>
                </aside>
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
        hideloading:()=>{dispatch({type:'HIDE_LOADING'})}
    }
}

export default connect(
    mapStateToprops,
    mapDispatchToprops
)(Product)