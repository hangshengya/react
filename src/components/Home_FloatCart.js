import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class Home_FloatCart extends React.Component {
    render() {
        let {shopcart} = this.props;
        let num =0;
        for(var i = 0;i < shopcart.length;i++){
            num += shopcart[i].num;
        }
        return (
            <div className="hoverCart">
                <Link to="cart">{num}</Link>
            </div>
        )
    }
}

const mapStateToprops = (state, ownProps) => {
    return {
        shopcart: state.shopcart
    }
}

const mapDispatchToprops = (dispatch, ownProps) => {
    return {}
}

export default connect(
    mapStateToprops,
    mapDispatchToprops
)(Home_FloatCart)