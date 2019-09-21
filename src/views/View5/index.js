import React, { Component } from 'react';
import BarChart from '../../charts/BarChart';
import './view5.css';

export default class View5 extends Component {
    render() {
        return (
            <div id='view5' className='pane' style={{padding: 10}}>
                view 5
                <BarChart width={1000} height={560}/>
            </div>
        )
    }
}