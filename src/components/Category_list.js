import React from 'react';
import { Link } from 'react-router';

export default class Category_list extends React.Component {
    componentDidUpdate(){
        //product list:Tab
        let id = this.props.id-1;
        $(".class_tree ul li").eq(id).addClass("current_style").siblings(".class_tree ul li").removeClass("current_style");
        $(".category_cont").eq(id).show().siblings(".category_cont").hide();
        $(".class_tree ul li").click(function () {
            var liindex = $(".class_tree ul li").index(this);
            $(this).addClass("current_style").siblings().removeClass("current_style");
            $(".category_cont").eq(liindex).fadeIn(150).siblings(".category_cont").hide();
        });
        
        //product list:Tab
       
        // $(".class_tree ul li").click(function () {
        //     var liindex = $(".class_tree ul li").index(this);
        //     $(this).addClass("current_style").siblings().removeClass("current_style");
        //     $(".tab_proList dd").eq(liindex).fadeIn(150).siblings(".tab_proList dd").hide();
        // });
    }
    render() {
        let data = this.props.listdata.data;
        let dataname = this.props.dataname;
        return (
            <div>
                <aside className="class_tree">
                    <ul>
                        <li>
                            <Link to="category/1">
                                <img src="/src/upload/menu_bg_01.png" />
                                <strong>蔬菜水果</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="category/2">
                                <img src="/src/upload/menu_bg_06.png" />
                                <strong>禽蛋肉类</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="category/3">
                                <img src="/src/upload/menu_bg_10.png" />
                                <strong>水产火锅</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="category/4">
                                <img src="/src/upload/menu_bg_14.png" />
                                <strong>熟食豆品</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="category/5">
                                <img src="/src/upload/menu_bg_03.png" />
                                <strong>米面粮油</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="category/6">
                                <img src="/src/upload/menu_bg_07.png" />
                                <strong>调料干货</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="category/7">
                                <img src="/src/upload/menu_bg_11.png" />
                                <strong>餐厨用品</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="category/8">
                                <img src="/src/upload/menu_bg_15.png" />
                                <strong>常购品</strong>
                            </Link>
                        </li>
                    </ul>
                </aside>
                {
                     data?data.map((item1,index1)=>{
                        return(
                            <ul className="category_cont" key={index1}>
                            {
                                item1.classify.map((item2,index2)=>{
                                    return (
                                        <li key={index2}>
                                            <Link to={{pathname:'product_list/'+(index1+1)+'/'+(index2+1),query:{dataname:dataname}}}>{item2.class}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        )
                     }):''
                }
                
            </div>
        )
    }
}