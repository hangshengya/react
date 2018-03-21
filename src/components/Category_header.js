import React from 'react';
import {Link} from 'react-router';
export default class Category_header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>动态分类名称</h1>
                    <Link to="search" className="rt_searchIcon">&#37;</Link>
                </header>
                <div style={{height:"1rem"}}></div>
            </div>
        )
    }
} 