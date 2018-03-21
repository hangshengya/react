import React from 'react';
import { Link } from 'react-router';

export default class Home_CategoryList extends React.Component {
    render() {
        return (
            <ul className="categoryLiIcon">
                <li>
                    <Link to="category/1">
                        <img src="/src/upload/menu_bg_01.png" alt="" />
                        <em>蔬菜水果</em>
                    </Link>

                </li>
                <li>
                    <Link to="category/2">
                        <img src="/src/upload/menu_bg_06.png" />
                        <em>禽蛋肉类</em>
                    </Link>

                </li>
                <li>
                    <Link to="category/3">
                        <img src="/src/upload/menu_bg_10.png" />
                        <em>水产火锅</em>
                    </Link>

                </li>
                <li>
                    <Link to="category/4">
                        <img src="/src/upload/menu_bg_14.png" />
                        <em>熟食豆制</em>
                    </Link>

                </li>
                <li>
                    <Link to="category/5">
                        <img src="/src/upload/menu_bg_03.png" />
                        <em>米面粮油</em>
                    </Link>

                </li>
                <li>
                    <Link to="category/6">
                        <img src="/src/upload/menu_bg_07.png" />
                        <em>调料干货</em>
                    </Link>

                </li>
                <li>
                    <Link to="category/7">
                        <img src="/src/upload/menu_bg_11.png" />
                        <em>餐厨用品</em>
                    </Link>

                </li>
                <li>
                    <Link to="category/8">
                        <img src="/src/upload/menu_bg_15.png" />
                        <em>常购品</em>
                    </Link>

                </li>
            </ul>
        )
    }
}