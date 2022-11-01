import React, { useState } from "react";
import { PieChart } from "./Piechart";
import "./Dashboard.css";

export function Dashboard() {
  const [id, setId] = useState(1);

  function calculateTotalRequests() {
    return 10;
  }

  const chart_list = [
    {
      label: "Count by Program",
      id: 1
    },
    {
      label: "Count by Team Name",
      id: 2
    },
    {
      label: "Count by Hardware Type",
      id: 3
    },
    {
      label: "Count by Location",
      id: 4
    },
    {
      label: "Device Allocation Matrix",
      id: 5
    }
  ];

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7]
  ];

  return (
    <div className="dashboard-component" style={{ marginTop: "4em" }}>
      <center>
        <label className="dashoard-title">Dashboard</label>
      </center>
      <div className="dashboard-container">
        <div className="charts-menu">
          {chart_list.map((chart, index) => (
            <div
              key={index}
              className={chart.id === id ? "chart-selected" : "chart"}
              onClick={() => {
                setId(chart.id);
              }}
            >
              {chart.label}
            </div>
          ))}
        </div>

        <div className="charts-boundary">
          <div className="charts-container">
            {id === 1 ? (
              <div className="piechart-container">
                <PieChart
                  data={data}
                  title="Device Allocation requests across different programs"
                />
                <label className="total-count">{`Total : ${calculateTotalRequests()} request`}</label>
              </div>
            ) : null}

            {/* {id === 4 ? <DeliveryTable currentUser={currentUser} /> : null} */}
          </div>
        </div>
      </div>
    </div>
  );
}
