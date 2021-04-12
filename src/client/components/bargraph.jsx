import React from "react";
import Dropdown from "./common/dropdown";
import { getBarData } from "../../server/data";
import Title from "./common/title";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const percentage = [0, 25, 50, 75, 100];
const data = getBarData();


//Renders an interactable bargraph chart
export default function App() {
  
  return (
    <div className="widechart-box">
      <Title Name="Weekly Disk Usage"></Title>
      <div className="gray-bg row">
        <Dropdown className="col" name="Week 12" padding="p-2 pl-3"></Dropdown>
        <Dropdown className="col" name="Monday" padding="p-2"></Dropdown>
        <button type="button" className="btn btn-light linegraph-button-right"><i className="fas fa-users" aria-hidden="true"></i></button>
      </div>
      <div className="gray-line"></div>

      <BarChart
        width={950}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid vertical={false}  />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(tick) => { return `${tick}%`;}} 
             ticks={percentage.slice(1, percentage.length) }/>
        <Tooltip separator=": " formatter={(value) => `${value}%`}/>
        <Legend layout="vertical" verticalAlign="middle" align="right" margin={{ top: 35, left: 0, right: 50, bottom: 0 }}/>
        <Bar dataKey="Total" fill="#394494" />
        <Bar dataKey="Documents" stackId="a" fill="#75d1ff" />
        <Bar dataKey="Desktop" stackId="a" fill="#ffd285" />
        <Bar dataKey="Temporary" stackId="a" fill="#bb89f5" />
        <Bar dataKey="Other" stackId="a" fill="#ffb08f" />
      </BarChart>
    </div>
  );
}
