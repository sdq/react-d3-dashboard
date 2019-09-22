import React, { Component } from 'react';
import './view2.css';
import PieChart from '../../charts/PieChart';

export default class View2 extends Component {
    render() {
        const width = 200
        const height = 200
        return (
            <div id='view2' className='pane'>
                <div className='header'>view 2</div>
                <PieChart width={width} height={height} />
            </div>
        )
    }
}