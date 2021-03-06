import React from 'react';

export default class Search extends React.Component {
    componentDidMount() {
        $(".searchHistory dd:last a").click(function () {
            var clear = confirm("确定清除搜索记录吗?");
            if (clear == true) {
                $(this).parents(".searchHistory").find("dd").remove();
            }
        });
    }
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>搜索</h1>
                </header>
                <div style={{ height: "1rem" }}></div>
                <aside className="searchArea">
                    <input type="text" placeholder="寻找调料、食材..." />
                    <input type="button" value="&#63;" className="searchBtn" />
                </aside>
                <dl className="searchHistory">
                    <dt>历史搜索</dt>
                    <dd>
                        <ul>
                            <li><a href="category.html">白菜</a></li>
                            <li><a href="category.html">菠菜</a></li>
                            <li><a href="category.html">醋</a></li>
                            <li><a href="category.html">东北大米</a></li>
                        </ul>
                    </dd>
                    <dd>
                        <a>清空历史记录</a>
                    </dd>
                </dl>
            </div>
        )
    }
}