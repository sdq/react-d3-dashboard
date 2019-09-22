import React, { Component } from 'react';
import { Select, Slider, Checkbox, Divider } from 'antd';
import './view3.css';

const { Option } = Select;

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Male', 'Female', 'Unknown'];
const defaultCheckedList = ['Male', 'Female', 'Unknown'];

export default class View3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
        };
    }

    onChangeSelection = value => {
        console.log(`selected ${value}`);
    }

    onChangeCheckbox = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
    };

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    };

    render() {
        return (
            <div id='view3' className='pane'>
                <div className='header'>view 3</div>
                <h3>User</h3>
                <Select
                    style={{ width: 275, margin: 5 }}
                    placeholder="Select User"
                    onChange={this.onChangeSelection}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
                <Divider />
                <h3>Gender</h3>
                <div style={{ width: 275, margin: 5 }}>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        Check all
                    </Checkbox>
                </div>
                <br />
                <div style={{ width: 275, margin: 5 }}>
                    <CheckboxGroup
                        options={plainOptions}
                        value={this.state.checkedList}
                        onChange={this.onChangeCheckbox}
                    />
                </div>
                <Divider />
                <h3>Age</h3>
                <Slider defaultValue={30}/>
            </div>
        )
    }
}