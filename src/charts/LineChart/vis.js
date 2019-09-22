import * as d3 from 'd3';

const draw = (props) => {
    d3.select('.vis-linechart > *').remove();
    let margin = { top: 20, right: 20, bottom: 30, left: 40 }
    const width = props.width - margin.left - margin.right;;
    const height = props.height - margin.top - margin.bottom;
    let svg = d3.select(".vis-linechart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    const data = [
        { "date": "2013-04-28", "value": 8.13 },
        { "date": "2013-04-29", "value": 9.13 },
        { "date": "2013-04-30", "value": 10.13 },
        { "date": "2013-05-01", "value": 11.13 },
        { "date": "2013-05-03", "value": 12.13 },
        { "date": "2013-05-04", "value": 13.13 },
        { "date": "2013-05-05", "value": 14.13 },
        { "date": "2013-05-06", "value": 15.13 },
    ]

    data.forEach(function (d) {
        d.date = d3.timeParse("%Y-%m-%d")(d.date);
        console.log('1+'+d.value)
        d.value = +d.value;
        console.log('2+'+d.value)
    });
    // Add X axis --> it is a date format
    let x = d3.scaleTime()
        .domain(d3.extent(data, function (d) { return d.date; }))
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { return +d.value; })])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(function (d) { return x(d.date) })
            .y(function (d) { return y(d.value) })
        )


    // d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",

    //     // When reading the csv, I must format variables:
    //     function (d) {
    //         console.log(d)
    //         return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value }
    //     },

    //     // Now I can use this dataset:
    //     function (data) {

    //         // Add X axis --> it is a date format
    //         var x = d3.scaleTime()
    //             .domain(d3.extent(data, function (d) { return d.date; }))
    //             .range([0, width]);
    //         svg.append("g")
    //             .attr("transform", "translate(0," + height + ")")
    //             .call(d3.axisBottom(x));

    //         // Add Y axis
    //         var y = d3.scaleLinear()
    //             .domain([0, d3.max(data, function (d) { return +d.value; })])
    //             .range([height, 0]);
    //         svg.append("g")
    //             .call(d3.axisLeft(y));

    //         // Add the line
    //         svg.append("path")
    //             .datum(data)
    //             .attr("fill", "none")
    //             .attr("stroke", "steelblue")
    //             .attr("stroke-width", 1.5)
    //             .attr("d", d3.line()
    //                 .x(function (d) { return x(d.date) })
    //                 .y(function (d) { return y(d.value) })
    //             )

    //     })

    // const data = [

    //     { "date": "1-Apr-12", "value": 58.13 },
    //     { "date": "2-Apr-12", "value": 59.13 },
    //     { "date": "3-Apr-12", "value": 60.13 },
    //     { "date": "4-Apr-12", "value": 61.13 },
    //     { "date": "5-Apr-12", "value": 62.13 },
    //     { "date": "6-Apr-12", "value": 63.13 },
    //     { "date": "7-Apr-12", "value": 64.13 },
    //     { "date": "8-Apr-12", "value": 65.13 },

    // ]

    // var data = [
    //     {date: new Date(2007, 3, 24), value: 93.24},
    //     {date: new Date(2007, 3, 25), value: 95.35},
    //     {date: new Date(2007, 3, 26), value: 98.84},
    //     {date: new Date(2007, 3, 27), value: 99.92},
    //     {date: new Date(2007, 3, 30), value: 99.80},
    //     {date: new Date(2007, 4,  1), value: 99.47},

    //   ];


    //   var line = d3.line()
    //       .x(function(d) { return x(d.date); })
    //       .y(function(d) { return y(d.value); });



    // var margin = { top: 10, right: 10, left: 50 }

    // var svg = d3.select('.vis-linechart').append("svg")
    //     .attr("width", width)
    //     .attr("height", height)
    //     .append("g")
    //     .attr("transform",
    //         "translate(" + margin.left + "," + margin.top + ")");

    //         var x = d3.scaleTime().range([0, width]);
    //         var y = d3.scaleLinear().range([height, 0]);

    // // // parse the date / time
    // // var parseTime = d3.timeParse("%d-%b-%y");

    // // data.forEach(function (d) {
    // //     d.date = parseTime(d.date);
    // //     d.value = +d.value;
    // // });

    // // set the ranges
    // // var x = d3.scaleTime().range([0, width]);
    // // // var x = d3.scaleLinear()
    // // //   .domain([1,100])
    // // //   .range([ 0, width ]);
    // // var y = d3.scaleLinear().range([height, 0]);
    // // console.log(data)

    // // // Scale the range of the data
    // // x.domain(d3.extent(data, function (d) { return d.date; }));
    // // y.domain([0, d3.max(data, function (d) { return d.value; })]);

    // // // define the line
    // // var valueline = d3.line()
    // //     .x(function (d) { return x(d.date); })
    // //     .y(function (d) { return y(d.value); });

    // // Add the valueline path.
    // // svg.append("path")
    // //     .data([data])
    // //     .attr("class", "line")
    // //     .attr("d", line);

    // // // Add the X Axis
    // // svg.append("g")
    // //     .attr("transform", "translate(0," + height + ")")
    // //     .call(d3.axisBottom(x));

    // // // Add the Y Axis
    // // svg.append("g")
    // //     .call(d3.axisLeft(y));
}

export default draw;