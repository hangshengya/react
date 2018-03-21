import React from 'react';
import '../css/loading.css';
export default class Loading extends React.Component {
    render() {
        return (
            <div className="loadEffect">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                加载中...
            </div>
        )
    }
}