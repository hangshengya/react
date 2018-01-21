import React from 'react';
import {Link} from 'react-router';

export default class User_List extends React.Component {
    render() {
        return (
            <ul className="userList">
            
           
                <li><Link to="order_list" className="orderListIcon">我的订单</Link></li>
                <li><Link to="favorite" className="collectionIcon">常购清单</Link></li>
                <li><Link to="profile" className="profileIcon">个人资料</Link></li>
            </ul>
        )
    }
}