import * as d3 from "d3";
import _ from "lodash";

const draw = props => {
  d3.select(".vis-linechart > *").remove();
  let margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = props.width - margin.left - margin.right;
  const height = props.height - margin.top - margin.bottom;
  let svg = d3
    .select(".vis-linechart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  let datas = [],
    x,
    y;
  if (props.datas !== null) {
    props.datas.forEach((data, i) => {
      datas[i] = _.cloneDeep(data.activities);

      datas[i].forEach(function(d) {
        d.date = d3.timeParse("%Y-%m-%d")(d.date);
        d.count = +d.count;
      });

      // Add X axis
      x = d3
        .scaleTime()
        .domain(
          d3.extent(datas[i], function(d) {
            return d.date;
          })
        )
        .range([0, width]);

      // Add Y axis
      y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(datas[i], function(d) {
            return +d.count;
          })
        ])
        .range([height, 0]);

      // // Add the line
      svg
        .append("path")
        .datum(datas[i])
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .x(function(d) {
              return x(d.date);
            })
            .y(function(d) {
              return y(d.count);
            })
        );
    });

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));

    console.log(datas);
  }

  // d3.select(".vis-linechart > *").remove();
  // let margin = { top: 20, right: 20, bottom: 30, left: 40 };
  // const width = props.width - margin.left - margin.right;
  // const height = props.height - margin.top - margin.bottom;
  // let svg = d3
  //   .select(".vis-linechart")
  //   .append("svg")
  //   .attr("width", width + margin.left + margin.right)
  //   .attr("height", height + margin.top + margin.bottom)
  //   .append("g")
  //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // data.forEach(function(d) {
  //   d.date = d3.timeParse("%Y-%m-%d")(d.date);
  //   d.count = +d.count;
  // });

  // // Add X axis --> it is a date format
  // let x = d3
  //   .scaleTime()
  //   .domain(
  //     d3.extent(data, function(d) {
  //       return d.date;
  //     })
  //   )
  //   .range([0, width]);
  // svg
  //   .append("g")
  //   .attr("transform", "translate(0," + height + ")")
  //   .call(d3.axisBottom(x));

  // // Add Y axis
  // var y = d3
  //   .scaleLinear()
  //   .domain([
  //     0,
  //     d3.max(data, function(d) {
  //       return +d.count;
  //     })
  //   ])
  //   .range([height, 0]);
  // svg.append("g").call(d3.axisLeft(y));

  // // Add the line
  // svg
  //   .append("path")
  //   .datum(data)
  //   .attr("fill", "none")
  //   .attr("stroke", "steelblue")
  //   .attr("stroke-width", 1.5)
  //   .attr(
  //     "d",
  //     d3
  //       .line()
  //       .x(function(d) {
  //         return x(d.date);
  //       })
  //       .y(function(d) {
  //         return y(d.count);
  //       })
  //   );
};

export default draw;
