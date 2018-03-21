import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            allprice: 0
        }
        this.getprice = this.getprice.bind(this);
    }
    componentDidMount() {
        //show or hide:delBtn
        $(".edit").toggle(function () {
            $(this).parent().siblings("dd").find(".delBtn").fadeIn();
            $(this).html("完成");
            $(".numberWidget").show();
            $(".priceArea").hide();
        }, function () {
            $(this).parent().siblings("dd").find(".delBtn").fadeOut();
            $(this).html("编辑");
            $(".numberWidget").hide();
            $(".priceArea").show();
        });

        nullTips();
        $(".delBtn").click(function () {
            nullTips();
        });
        function nullTips() {
            if ($(".cart dd").length === 0) {
                var tipsCont = "<mark style='display:block;background:none;text-align:center;color:grey;'>购物车为空！</mark>"
                $(".cart").remove();
                $(".shopcart").append(tipsCont);
            } else {
                $(".shopcart mark").remove();
            }
        }

        $(".cart input").prop('checked', true);

        $(".cart dt input").click(function () {
            if ($(this).prop('checked')) {
                $(".cart input").prop('checked', true);
            } else {
                $(".cart input").prop('checked', false);
            }
        })

        $(".cart dd input").click(function () {
            if (!$(this).prop('checked')) {
                $(".cart dt input").prop('checked', false);
            } else {

            }

        })
        this.getprice();
    }
    getprice() {
        setTimeout(() => {
            let allprice = 0;
            Array.from($('.cart dd .cek')).forEach((item, index) => {
                if ($(item).prop('checked')) {
                    let num = $(item).parent().find('span').html();
                    let price = $(item).parent().find('strong').html();
                    allprice += num * price;
                }
            })
            this.setState({
                allprice: allprice
            })
        }, 0)
    }

    render() {
        let { shopcart, changeitem, remove } = this.props;
        let allprice = Number(this.state.allprice).toFixed(2);
        return (
            <div className="shopcart">
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>购物车</h1>
                </header>
                <div style={{ height: "1rem" }}></div>


                <dl className="cart">
                    <dt>
                        <label><input type="checkbox" onClick={this.getprice} />全选</label>
                        <a className="edit">编辑</a>
                    </dt>
                    {
                        shopcart.map((item, index) => {
                            return (
                                <dd key={item.id}>
                                    <input type="checkbox" className="cek" onClick={this.getprice} />
                                    <a href="product.html" className="goodsPic"><img src={item.img} /></a>
                                    <div className="goodsInfor">
                                        <h2>
                                            <a href="product.html">{item.msg}</a>
                                            <span>{item.num}</span>
                                        </h2>
                                        <div className="priceArea">
                                            <strong>{item.nowprice}</strong>
                                            <del>{item.oldprice}</del>
                                        </div>
                                        <div className="numberWidget">
                                            <input type="button" value="-" className="minus" onClick={() => { changeitem({ id: item.id, num: -1 }); this.getprice() }} />
                                            <input type="text" value={item.num} disabled className="number" />
                                            <input type="button" value="+" className="plus" onClick={() => { changeitem({ id: item.id, num: 1 }); this.getprice() }} />
                                        </div>
                                    </div>
                                    <a className="delBtn" onClick={() => { remove({ id: item.id }) }}>删除</a>
                                </dd>
                            )
                        })
                    }
                </dl>

                <div style={{ height: "1rem" }}></div>
                <aside className="btmNav">
                    <a>合计：￥{allprice}</a>
                    <Link to="confirm_order" style={{ background: '#64ab5b', color: 'white', textShadow: 'none' }}>立即下单</Link>
                </aside>
            </div>
        )
    }
}

const mapStateToprops = (state, ownProps) => {
    return {
        shopcart: state.shopcart
    }
}
const mapDispatchToprops = (dispatch, ownProps) => {
    return {
        changeitem: (obj) => { dispatch({ type: 'CHANGE_ITEM', payload: obj }) },
        remove: (obj) => { dispatch({ type: 'REMOVE', payload: obj }) }
    }
}

export default connect(
    mapStateToprops,
    mapDispatchToprops
)(Cart)