import React from 'react';
import { Link } from 'react-router';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>个人资料</h1>
                </header>
                <div style={{height:"1rem"}}></div>
                <ul className="inforList">
                    <li>
                        <Link to="change_name" className="isNext">
                            <span>用户昵称</span>
                            <span>未设置</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="change_tel" className="isNext">
                            <span>手机号码</span>
                            <span>18309275673</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}