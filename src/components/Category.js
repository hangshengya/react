import React from 'react';
import Category_header from './Category_header';
import Category_list from './Category_list';
import {connect} from 'react-redux';

class Category extends React.Component {
    constructor(){
        super();
        this.state={
            listdata:[]
        }
        this.show = this.show.bind(this);
    }
    componentDidMount(){
        this.show();
    }
    show(){
        let {showloading,hideloading} = this.props;
        showloading();
        let url = 'http://localhost:8008/classify';
        fetch(url).then(
            res =>{return res.json()}
        ).then(
            res => {               
                    hideloading();
                    this.setState({listdata:res[0]})
            }
        )
    }
    render() {
        return (
            <div>
                <Category_header/>
                
                <Category_list listdata={this.state.listdata} id={this.props.params.id} dataname="classify"/>
            
            </div>
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
)(Category)