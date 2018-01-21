import React from 'react';
import {Link} from 'react-router';

export default class Home_Header extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <Link to="location" className="location">上海市</Link>                   
                    <h1 className="logoIcon" style={{fontSize: "0.85rem"}}>&#35;</h1>
                    <Link to="search" className="rt_searchIcon">&#37;</Link>
                </header>
                <div style={{height: "1rem"}}></div>
            </div>        
        )
    }
}