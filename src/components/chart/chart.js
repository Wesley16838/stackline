import React from "react";
import * as d3 from "d3";
import "./style.scss";

const Chart = (props) => {
  React.useEffect(() => {
    let prepareData = [];
    if (props.data.length !== 0) {
      for (let i = 0; i < props.data.length; i++) {
        prepareData.push({
          date: d3.timeParse("%Y-%m-%d")(props.data[i].weekEnding),
          value: props.data[i].retailSales,
        });
      }
      console.log(prepareData);
      drawLineChart(prepareData);
    }
  }, [props.data]);
  const drawLineChart = (chartdata) => {
    d3.select("#container").select("svg").remove();

    const margin = { top: 75, right: 75, bottom: 75, left: 75 };
    const wid = props.width - margin.top - margin.bottom;
    const hei = props.height - margin.left - margin.right;
    const svg = d3
      .select("#container")
      .append("svg")
      .attr("width", wid + margin.bottom)
      .attr("height", hei + margin.right)
      .append("g")
      .attr("transform", `translate(${margin.left - 25},${margin.top - 25})`);

    let xScale = d3
      .scaleTime()
      .domain(
        d3.extent(chartdata, function (d) {
          return d.date;
        })
      )
      .range([0, wid]);
    svg
      .append("g")
      .attr("transform", "translate(0," + hei + ")")
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("text-anchor", "center");

    let yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(chartdata, function (d) {
          return d.value;
        }),
      ])
      .range([hei, 0]);

    svg
      .append("g")
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .style("text-anchor", "center");

    svg
      .append("path")
      .datum(chartdata)
      .attr("fill", "none")
      .attr("stroke", "#37acf5")
      .attr("stroke-width", 3)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return xScale(d.date);
          })
          .y(function (d) {
            return yScale(d.value);
          })
      );
  };
  return (
    <>
      <h2>{props.title}</h2>
      <div id="container" />
    </>
  );
};

export default Chart;
