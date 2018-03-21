import React from 'react';
import {Link} from 'react-router';

export default class User_infor extends React.Component {
    render() {
        let name = localStorage.getItem("userName");
        return (
            <div className="userInfor">
                <a className="userIcon"><img src="/src/images/icon/DefaultAvatar.jpg" /></a>
                <h2>{name?name:<Link to="login">点击登录</Link>}</h2>
            </div>
        )
    }
}