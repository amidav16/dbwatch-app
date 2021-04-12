import React from "react";
import { getSyncData } from './../../server/data';
import SynchCharts from './common/synchcharts';
import Submit from "./common/submit";
import Card from "./common/card";

const syncData = getSyncData();

export default function App() {
  return (
    <div className="p-3 container-fluid">

        <div className="row dashboard-title">Task Assignment</div>
        <div className="row dashboard-title"><p>Performance Week 12</p> </div>

        <div className="row row-top">
          <div className="col">
            <SynchCharts data={syncData}/>
          </div>
          <div className="col mt-2">
            
            <Card title="Upgrade Application" 
            description="Version control is out of date, update 4.7 clears more desktop and document disk space"
            boxname="Update to 4.7"
            id="1">
            </Card>
            <div className="p-2"></div>
            <Card title="Expand diskspace" 
            description="Database 1217128 needs atleast 32% temporarily space in average to suffice."
            boxname="Upgrade disk"
            id="2">
            </Card>
            <Submit/>
          </div>
          
         
          
        </div>
    </div>
  );
}
