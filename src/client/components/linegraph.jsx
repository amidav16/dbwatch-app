import React from "react";
import Title from "./common/title";
import { getLineData } from '../../server/data';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const percentage = [0, 25, 50, 75, 100];
const data = getLineData();

//Renders an interactable linegraph chart
export default function LineGraph() {
  return (

    <div className="widechart-box">
      <Title Name="Disk Activity"></Title>
      <AreaChart
        width={1050}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <Legend  verticalAlign="top" height={36}/>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="Name" />
        <YAxis tickFormatter={(tick) => { return `${tick}%`;}} 
              ticks={percentage.slice(1, percentage.length) }/>
        <Tooltip separator=": " formatter={(value) => `${value}%`} />
        <Area
          type="monotone"
          dataKey="Desktop"
          stackId="1"
          stroke="#FFBB28"
          fill="#ffd285"
        />
          <Area
          type="monotone"
          dataKey="Other"
          stackId="1"
          stroke="#FF8042"
          fill="#ffb08f"
        />
        <Area
          type="monotone"
          dataKey="Documents"
          stackId="1"
          stroke="#0088FE"
          fill="#75d1ff"
        />
        <Area
          type="monotone"
          dataKey="Temporary"
          stackId="1"
          stroke="#a95edb"
          fill="#bb89f5"
        />
      </AreaChart>
    </div>
  );
}
