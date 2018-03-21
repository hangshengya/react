import React from 'react';
import User_header from './User_header';
import User_infor from './User_infor';
import User_List from './User_List';

export default class User extends React.Component {
    render() {
        return (
            <div>
                <User_header/>
                <User_infor/>
                <User_List/>
            </div>
        )
    }
}