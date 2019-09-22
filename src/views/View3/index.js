import React, { Component } from 'react';
import { Select, Slider } from 'antd';
import './view3.css';

const { Option } = Select;

export default class View3 extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <div id='view3' className='pane'>
                <div className='header'>view 3</div>
                <Slider defaultValue={30}/>
                <Select
                    style={{ width: 275, margin: 5 }}
                    placeholder="Select a person"
                    onChange={this.onChange}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </div>
        )
    }
}