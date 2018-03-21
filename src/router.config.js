import React from 'react'; 
import {Router,Route,hashHistory,browserHistory,IndexRoute,Redirect} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Category from './components/Category';
import Cart from './components/Cart';
import User from './components/User';
import User_set from './components/User_set';
import Error from './components/Error';
import Login from './components/Login';
import Reg from './components/Reg';
import Change_pwd from './components/Change_pwd';
import Address from './components/Address';
import Article from './components/Article';
import Find_pwd from './components/Find_pwd';
import Location from './components/Location';
import Search from './components/Search';
import Product from './components/Product';
import Product_list from './components/Product_list';
import Confirm_order from './components/Confirm_order';
import Return_state from './components/Return_state';
import Order_list from './components/Order_list';
import Favorite from './components/Favorite';
import Profile from './components/Profile';
import Change_name from './components/Change_name';
import Change_tel from './components/Change_tel';
import About from './components/About';


const RouterConfig = () => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="category/:id" component={Category}/>
            <Route path="cart" component={Cart}/>
            <Route path="user" component={User}/>
            <Route path="login" component={Login}/>
            <Route path="reg" component={Reg}/>
            <Route path="change_pwd" component={Change_pwd}/>
            <Route path="address" component={Address}/>
            <Route path="user_set" component={User_set}/>
            <Route path="article" component={Article}/>
            <Route path="find_pwd" component={Find_pwd}/>
            <Route path="location" component={Location}/>
            <Route path="search" component={Search}/>
            <Route path="product/:id/:uid/:sid" component={Product}/>
            <Route path="product/:id/:uid" component={Product}/>
            <Route path="product_list/:id/:uid" component={Product_list}/>
            <Route path="confirm_order" component={Confirm_order}/>
            <Route path="return_state" component={Return_state}/>
            <Route path="order_list" component={Order_list}/>
            <Route path="profile" component={Profile}/>
            <Route path="favorite" component={Favorite}/>
            <Route path="change_name" component={Change_name}/>
            <Route path="change_tel" component={Change_tel}/>
            <Route path="about" component={About}/>
            <Route path="*" component={Error}/>
        </Route>
    </Router>
) 

export default RouterConfig;