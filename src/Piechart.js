import React from "react";
import Chart from "react-google-charts";
import PageLoader from "./Loader.js";

export function PieChart(props) {
  let { data, title } = props;

  return (
    <center>
      <Chart
        width={"1100px"}
        height={"450px"}
        chartType="PieChart"
        loader={
          <div>
            <PageLoader />
          </div>
        }
        data={data}
        options={{
          title: title,
          is3D: true,
          chartArea: {
            height: "90%",
            width: "100%"
          }
        }}
        legendToggle
      />
    </center>
  );
}
