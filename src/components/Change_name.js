import React from 'react';
export default class Change_name extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>用户昵称</h1>
                </header>
                <div style={{height:"1rem"}}></div>
                <ul className="userForm">
                    <li><input type="text" value="" placeholder="设置用户名" /></li>
                    <li><input type="button" value="更新保存" className="formLastBtn" /></li>
                </ul>
            </div>
        )
    }
}