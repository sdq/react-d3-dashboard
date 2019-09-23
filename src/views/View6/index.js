import React, { Component } from 'react';
import { List } from 'antd';
import './view6.css';

export default class View6 extends Component {

    selectUser = (user) => {
        console.log('select');
        console.log(user);
    }

    render() {
        const {data} = this.props;
        return (
            <div id='view6' className='pane'>
                <div className='header'>view 6</div>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={user => <List.Item onClick = {() => this.selectUser(user.name)}>
                        <div>
                            {user.name + ':' + user.age}
                        </div>
                    </List.Item>}
                />
            </div>
        )
    }
}