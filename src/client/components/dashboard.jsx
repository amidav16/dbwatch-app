import React from "react";  
import LineData from "./linegraph";
import PieGraph from "./piegraph";
import BarGraph from "./bargraph";
import TaskError from "./taskerror";


//We render this in the homepage
export default function DashBoard() {
  return (
    <div className="container-fluid maincontent">
        
        <div className="row dashboard-title">Dashboard</div>
        <div className="row dashboard-title"><p>Data Usage Overview</p> </div>

      <div className="row row-top">
        <div className="col">
          <BarGraph></BarGraph>
        </div>
        <div className="col">
          <PieGraph></PieGraph>
        </div>
      </div>
      

      <div className="row ">
        <div className="col">
          <LineData></LineData>
        </div>
        <div className="col">
          <TaskError></TaskError>
          
        </div>
      </div>
    
    </div>

  );
}
