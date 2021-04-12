import React from 'react';
import Title from "../common/title";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
  
const percentage = [0, 25, 50, 75, 100];

//Synchronized charts comparing two graphs, can refactor more to multiple components

const SynchCharts = ({data}) => {
    return ( 
    <div className="sync-space">
        <div className="sync-box mb-5">
        <Title Name="Monday"></Title>
        <p className="sync-positive-title">Best Performace</p>
        <text className="sync-positive" textAnchor="middle" dominantBaseline="middle">
        	40%
          <i class="fas fa-arrow-down"></i>
        </text>
        <AreaChart
        width={500}
        height={250}
        data={data}
        syncId="1"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis dataKey="Name" />
        <YAxis tickFormatter={(tick) => { return `${tick}%`;}} 
              ticks={percentage.slice(1, percentage.length) }/>
        <Tooltip separator=": " formatter={(value) => `${value}%`} />
        <Area
          type="monotone"
          dataKey="Monday"
          stackId="1"
          stroke="#FFBB28"
          fill="#ffd285"
          />

      </AreaChart>
          </div>

        <div className="sync-box">
        <div className="gray-line"></div>
        <Title Name="Thursday"></Title>
        <text className="sync-negative" textAnchor="middle" dominantBaseline="middle">
        	85%
          <i class="fas fa-arrow-up"></i>
        </text>
        <AreaChart
        width={500}
        height={250}
        data={data}
        syncId="1"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis dataKey="Name" />
        <YAxis tickFormatter={(tick) => { return `${tick}%`;}} 
              ticks={percentage.slice(1, percentage.length) }/>
        <Tooltip separator=": " formatter={(value) => `${value}%`} />
        <Area
          type="monotone"
          dataKey="Thursday"
          stackId="1"
          stroke="#a95edb"
          fill="#bb89f5"
        />
      </AreaChart>
      </div>     
    </div> 
    );
}
 
export default SynchCharts;