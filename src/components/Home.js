import React from 'react';
import Home_Slide from './Home_Slide';
import Home_CategoryList from './Home_CategoryList';
import Home_ProductList from './Home_ProductList';
import Home_Header from './Home_Header';
import Home_FloatCart from './Home_FloatCart';
import {connect} from 'react-redux';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            listdata: {}
        }
    }
    render() {
        
        return (
            <div>
                <Home_Header />
                <Home_Slide />
                <Home_CategoryList />
                <Home_ProductList listdata={this.state.listdata} dataname="home"/>
                <Home_FloatCart />
               
            </div>
        )
    }
    componentDidMount() {
        this.props.router.replace('home');
        this.getdata();
    }
    getdata() {
        let {showloading,hideloading} = this.props;
        showloading();
        let url = 'http://localhost:8008/home';
        fetch(url).then(
            res =>{return res.json()}
        ).then(
            res => {                            
                    hideloading();
                    this.setState({listdata:res[0]})            
            }
        )
    }
}

const mapStateToprops = (state,ownProps)=>{
    return{}
}
const mapDispatchToprops = (dispatch,ownProps)=>{
    return{
        showloading:()=>{dispatch({type:'SHOW_LOADING'})},
        hideloading:()=>{dispatch({type:'HIDE_LOADING'})}
    }
}

export default connect(
    mapStateToprops,
    mapDispatchToprops
)(Home)