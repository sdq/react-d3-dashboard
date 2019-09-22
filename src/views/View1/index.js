import React, { Component } from 'react';
import { Avatar } from 'antd';
import './view1.css';

export default class View1 extends Component {
    render() {
        let {user} = this.props;
        return (
            <div id='view1' className='pane'>
                <div className='header'>view 1</div>
                <div>
                    <div className={'avatar-view'}>
                        <Avatar shape="square" size={120} icon="user" />
                    </div>
                    <div className={'info-view'}>
                        <div>name: {user.name}</div>
                        <div>gender: {user.gender}</div>
                        <div>age: {user.age}</div>
                        <div>job: designer</div>
                    </div>
                </div>
            </div>
        )
    }
}
