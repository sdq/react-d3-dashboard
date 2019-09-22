import React, { Component } from 'react';
import { List } from 'antd';
import data from '../../data/barchart-demo';
import './view6.css';

export default class View6 extends Component {
    render() {
        return (
            <div id='view6' className='pane'>
                <div className='header'>view 6</div>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>
                        <div>
                            {item.name + ':' + item.age}
                        </div>
                    </List.Item>}
                />
            </div>
        )
    }
}