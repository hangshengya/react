import React from 'react';

export default class Address extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>我的地址</h1>
                </header>
                <div style={{height:"1rem"}}></div>
                <ul className="userForm">
                    <li>
                        <input type="text" defaultValue="DeathGhost"/>
                    </li>
                    <li>
                        <select>
                            <option>陕西省</option>
                        </select>
                    </li>
                    <li>
                        <select>
                            <option>西安市</option>
                        </select>
                    </li>
                    <li>
                        <select>
                            <option>雁塔区</option>
                        </select>
                    </li>
                    <li>
                        <textarea defaultValue="省体育场220号"></textarea>
                    </li>
                    <li>
                        <input type="button" defaultValue="修改地址" className="formLastBtn"/>
                    </li>
                </ul>
            </div>
        )
    }
}