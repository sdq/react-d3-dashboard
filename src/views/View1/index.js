import React, { Component } from 'react';
import { Avatar } from 'antd';
import './view1.css';

export default class View1 extends Component {
    render() {
        return (
            <div id='view1' className='pane'>
                <div className='header'>view 1</div>
                <div>
                    <div style={{float: 'left', marginLeft: 5}}>
                        <Avatar shape="square" size={120} icon="user" />
                    </div>
                    <div style={{float: 'left', marginLeft: 30}}>
                        <div>name: Jack</div>
                        <div>gender: male</div>
                        <div>age: 24</div>
                        <div>job: Designer</div>
                    </div>
                </div>
            </div>
        )
    }
}
