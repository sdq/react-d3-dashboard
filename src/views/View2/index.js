import React, { Component } from 'react';
import './view2.css';
import PieChart from '../../charts/PieChart';
import data from '../../data';

export default class View2 extends Component {
    render() {
        const width = 260
        const height = 260
        return (
            <div id='view2' className='pane'>
                <div className='header'>view 2</div>
                <PieChart data={data} width={width} height={height} />
            </div>
        )
    }
}