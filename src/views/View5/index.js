import React, { Component } from 'react';
import BarChart from '../../charts/BarChart';
import data from '../../data/barchart-demo';
import './view5.css';

export default class View5 extends Component {
    render() {
        return (
            <div id='view5' className='pane'>
                <div className='header'>view 5</div>
                <BarChart data={data} width={1000} height={560}/>
            </div>
        )
    }
}