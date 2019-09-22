import React, { Component } from 'react';
import BarChart from '../../charts/BarChart';
import data from '../../data';
import './view5.css';

export default class View5 extends Component {
    render() {
        return (
            <div id='view5' className='pane'>
                <div className='header'>view 5</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                <BarChart data={data} width={1000} height={550}/>
                </div>                
            </div>
        )
    }
}