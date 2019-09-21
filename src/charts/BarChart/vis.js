import * as d3 from 'd3';

const draw = (props) => {
    d3.select('.vis-barchart > *').remove();
    const width = props.width;
    const height = props.height;
    d3.select('.vis-barchart').append('svg').attr('width',width).attr('height',height)
}

export default draw;