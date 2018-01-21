import React from 'react';
export default class Error extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>404页面</h1>
                </header>
                <div style={{height:'1rem'}}></div>
                <mark className="notFound">对不起页面未找到！</mark>
            </div>
        )
    }
}