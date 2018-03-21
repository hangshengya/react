import React from 'react';
export default class Change_tel extends React.Component {
    render() {
        return (
            <div>
                <header>
                <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                <h1>手机号码</h1>
               </header>
               <div style={{height:"1rem"}}></div>
               <ul className="userForm">
                <li><input type="text" value="18309275673" placeholder="修改手机号码"/></li>
                <li><input type="button" value="更新保存"className="formLastBtn"/></li>
               </ul>
            </div>
        )
    }
}