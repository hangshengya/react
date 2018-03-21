import React from 'react';

export default class Location extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>我的位置</h1>
                </header>
                <div style={{height:"1rem"}}></div>
                <div className="location_auto">定位城市：<span>自动定位...</span></div>
                <dl className="cityLi">
                    <dt>热门城市</dt>
                    <dd><a>西安</a></dd>
                    <dd><a>杭州</a></dd>
                    <dd><a>广州</a></dd>
                    <dd><a>北京</a></dd>
                    <dd><a>上海</a></dd>
                    <dd><a>南京</a></dd>
                </dl>
                <dl className="cityLi">
                    <dt>A</dt>
                    <dd><a>鞍山</a></dd>
                    <dd><a>安庆</a></dd>
                    <dd><a>安阳</a></dd>
                    <dd><a>安顺</a></dd>
                    <dd><a>安康</a></dd>
                    <dd><a>阿拉善盟</a></dd>
                    <dd><a>阿克苏</a></dd>
                </dl>
                <dl className="cityLi">
                    <dt>B</dt>
                    <dd><a>北京</a></dd>
                    <dd><a>保定</a></dd>
                    <dd><a>包头</a></dd>
                    <dd><a>蚌埠</a></dd>
                    <dd><a>滨州</a></dd>
                    <dd><a>宝鸡</a></dd>
                    <dd><a>巴彦淖尔</a></dd>
                </dl>
            </div>
        )
    }
}