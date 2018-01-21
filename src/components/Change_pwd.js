import React from 'react';


export default class Change_pwd extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>修改密码</h1>
                </header>
                <div style={{ height: "1rem" }}></div>
                <ul className="userForm">
                    <li>
                        <label className="formName">旧密码：</label>
                        <input type="password" required placeholder="旧密码..." />
                    </li>
                    <li>
                        <label className="formName">新密码：</label>
                        <input type="password" required placeholder="新密码..." />
                    </li>
                    <li>
                        <label className="formName">确认新密码：</label>
                        <input type="password" required placeholder="确认新密码..." />
                    </li>
                    <li><input type="button" value="确认修改密码" className="formLastBtn" /></li>
                </ul>
            </div>
        )
    }
}