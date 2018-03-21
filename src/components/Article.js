import React from 'react';

export default class Article extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>文章标题</h1>
                </header>
                <div style={{height:"1rem"}}></div>
                <div className="article">
                    1999年底，身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于2000年1月1日在中关村创建了百度公司。从最初的不足10人发展至今，员工人数超过17000人。如今的百度，已成为中国最受欢迎、影响力最大的中文网站。
                    <img src="/src/upload/slide001.jpg" />
                    自定义后台HTML输出，此处为文章模块，后台编辑器输出。
               </div>
            </div>
        )
    }
}