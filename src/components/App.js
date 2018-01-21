import React from 'react';
import Footer from './Footer';
import Loading from './Loading';
// import Home from './Home';
// import Category from './Category';
// import Cart from './Cart';
// import User from './User';
// import Error from './Error';
import {connect} from 'react-redux';

class App extends React.Component{
    render(){
        let{bfoot,bloading,showfoot,hidefoot,showloading,hideloading} = this.props;  
        let path = this.props.location.pathname;
        if(/home|category|user|order_list|login|reg/.test(path)){
            setTimeout(showfoot,0);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ;
        }else{
            setTimeout(hidefoot,0);   
        }
        return(
            <div>
                {this.props.children}
                {bloading?<Loading/>:''}         
                {bfoot?<Footer/>:''}          
            </div>
        )
    }
}


const mapStateToprops = (state,ownProps)=>{
    return{
        bfoot:state.bfoot,
        bloading:state.bloading
    }
}
const mapDispatchToprops = (dispatch,ownProps)=>{
    return{
        showfoot:()=>{dispatch({type:'SHOW_FOOT'})},
        hidefoot:()=>{dispatch({type:'HIDE_FOOT'})},
        showloading:()=>{dispatch({type:'SHOW_LOADING'})},
        hideloading:()=>{dispatch({type:'HIDE_LOADING'})}
    }
}

export default connect(
    mapStateToprops,
    mapDispatchToprops
)(App)