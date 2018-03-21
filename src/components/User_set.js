import React from 'react';
import { Link } from 'react-router';

export default class User_set extends React.Component {
    constructor(){
        super();
        this.exit=this.exit.bind(this);
    }
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>设置</h1>
                </header>
                <div style={{ height: "1rem" }}></div>
                <ul className="inforList">
                    <li><Link to="change_pwd" className="isNext">修改密码</Link></li>
                    <li><Link to="address" className="isNext">我的地址</Link></li>
                    <li><Link to="about" className="isNext">关于我们</Link></li>
                    <li><Link to="login" className="lastBtn" onClick={this.exit}>安全退出</Link></li>
                </ul>
            </div>
        )
    }
    exit(){
        localStorage.removeItem("userName");
    }
}