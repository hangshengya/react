import React from 'react';
import {Link} from 'react-router';

export default class User_header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>个人中心</h1>
                    <Link to="user_set" className="iconfont setIcon">&#42;</Link>
                </header>
                <div style={{height: '1rem'}}></div>
            </div>
        )
    }
}