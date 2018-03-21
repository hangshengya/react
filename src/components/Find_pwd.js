import React from 'react';
import { Link } from 'react-router';

export default class Find_pwd extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>找回密码</h1>
                </header>
                <div style={{height:"1rem"}}></div>
                <ul className="formarea">
                    <li>
                        <label className="lit">账号：</label>
                        <input type="text" placeholder="手机号码" className="textbox" />
                    </li>
                    <li style={{padding:0}}><a className="checkCode">获取手机校验码</a></li>
                    <li>
                        <label className="lit">校验码：</label>
                        <input type="text" placeholder="六位校验码" className="textbox" />
                    </li>
                    <li>
                        <label className="lit">新密码：</label>
                        <input type="password" placeholder="设置新密码" className="textbox" />
                    </li>
                    <li>
                        <label className="lit">确认密码：</label>
                        <input type="password" placeholder="确认新密码" className="textbox" />
                    </li>
                    <li>
                        <input type="button" value="立即修改" />
                    </li>
                </ul>
            </div>
        )
    }
}