import React from "react";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";
import Dropdown from "./common/dropdown";
import Title from "./common/title";
import { getPieData } from "../../server/data";

const COLORS = ["#75d1ff", "#bb89f5", "#ffd285", "#ffb08f"];

//Renders an interactable bargraph chart, the colors on mouse over can be changed later
export default function App() {

  const data = getPieData();

  return (
    <div className="smallchart-box">
      <Title Name="Disk Usage Average"></Title>
      <PieChart className="bar" width={440} height={360}>

      <text className="piechart-text"x={162} y={172} textAnchor="middle" dominantBaseline="middle">
        	40%
        </text>
        <Pie
          data={data}
          cx={150}
          cy={160}
          innerRadius={110}
          outerRadius={135}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip separator=": " formatter={(value) => `${value}%`}/>
        <Legend layout="vertical" verticalAlign="middle" align="right"/>
      </PieChart>
      <div className="gray-line"></div>

      <div className="row pie-button">
        <Dropdown className="col" name="Current Week" padding="p-2 pl-3"></Dropdown>
        <p className="col">View data report<i className="fas fa-angle-double-right"></i></p> 
 
      </div>

    </div>
  );
}
