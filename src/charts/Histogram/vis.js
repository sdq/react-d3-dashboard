import * as d3 from 'd3';

const drawObject = {};

const draw = (props, value) => {
    d3.select('.vis-histogram > *').remove();
    let data = props.data;
    const margin = { top: 20, right: 20, bottom: 20, left: 40 };
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;

    data = Object.assign(
        data.map((item) => item.age),
        { columns: ['Age'] }
    );

    const svg = d3
        .select('.vis-histogram')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom + 20)
        .append('g')
        .attr('transform', 'translate(' + (margin.left + 10) + ',' + margin.top + ')');

    drawObject.width = width;
    drawObject.height = height;
    drawObject.svg = svg;
    drawObject.data = data;

    // X axis: scale and draw:
    const x = d3
        .scaleLinear()
        .domain(d3.extent(data)) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
        .range([0, width]);
    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    // Y axis: initialization
    const y = d3.scaleLinear().range([height, 0]);

    const yAxis = svg.append('g');

    // Add X axis label
    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width / 2)
        .attr('y', height + margin.top + margin.bottom - 10)
        .attr('fill', 'gray')
        .text('Age');

    // Add Y axis label
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', 0 - height / 2)
        .attr('y', 0 - margin.left + 10)
        .attr('text-anchor', 'middle')
        .attr('fill', 'gray')
        .text('Frequency');

    drawObject.x = x;
    drawObject.y = y;
    drawObject.yAxis = yAxis;

    update(value);
};

const update = (value) => {
    console.log('update', value, drawObject);

    const x = drawObject.x;
    const y = drawObject.y;
    const data = drawObject.data;
    const yAxis = drawObject.yAxis;
    const svg = drawObject.svg;
    const width = drawObject.width;
    const height = drawObject.height;

    // set the parameters for the histogram
    var histogram = d3
        .histogram()
        .value(function (d) {
            return d;
        }) // I need to give the vector of value
        .domain(x.domain()) // then the domain of the graphic
        .thresholds(x.ticks(value.value)); // then the numbers of bins

    // And apply this function to data to get the bins
    var bins = histogram(data);

    console.log('bins', bins, value.value);

    // Y axis: update now that we know the domain
    y.domain([
        0,
        d3.max(bins, function (d) {
            return d.length;
        }),
    ]); // d3.hist has to be called before the Y axis obviously
    yAxis.transition().duration(1000).call(d3.axisLeft(y));

    // Join the rect with the bins data
    var u = svg.selectAll('rect').data(bins);

    // Manage the existing bars and eventually the new ones:
    u.enter()
        .append('rect') // Add a new rect for each new elements
        .merge(u) // get the already existing elements as well
        .transition() // and apply changes to all of them
        .duration(1000)
        .attr('x', 1)
        .attr('transform', function (d) {
            return 'translate(' + x(d.x0) + ',' + y(d.length) + ')';
        })
        .attr('width', function (d) {
            return x(d.x1) - x(d.x0) - 1;
        })
        .attr('height', function (d) {
            return height - y(d.length);
        })
        .style('fill', '#69b3a2');

    // If less bar in the new histogram, I delete the ones not in use anymore
    u.exit().remove();
};

export default draw;
