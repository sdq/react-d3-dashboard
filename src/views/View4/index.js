import React, { Component } from 'react';
import './view4.css';
import LineChart from '../../charts/LineChart';
import data from '../../data';

export default class View4 extends Component {
    render() {
        const width = 1100,
              height = 250
        return (
            <div id='view4' className='pane' >
                <div className='header'>view 4</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                    <LineChart data={data} width={width} height={height} />
                </div>
            </div>
        )
    }
}