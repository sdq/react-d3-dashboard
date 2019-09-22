import React, { Component } from 'react';
import './view4.css';
import LineChart from '../../charts/LineChart';

export default class View4 extends Component {
    render() {
        const width = 900
        const height = 250
        return (
            <div id='view4' className='pane'>
                <div className='header'>view 4</div>
                <LineChart width={width} height={height}/>
            </div>
        )
    }
}