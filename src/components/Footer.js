import React from 'react';
import {Link} from 'react-router';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div style={{ height: "1.2rem" }}></div>
                <nav>
                    <Link to="home" className="homeIcon">首页</Link>
                    <Link to="category/1" className="categoryIcon">分类</Link>
                    <Link to="cart" className="cartIcon">购物车</Link>
                    <Link to="user" className="userIcon">我的</Link>
                </nav>
            </div>
        )
    }
}