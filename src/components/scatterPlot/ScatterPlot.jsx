import React from 'react';
import './scatterplot.scss';
import { AreaChart, Area, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const ClientSatisfactionChart = () => (
  <AreaChart
    width={500}
    height={300}
    data={data}
    margin={{ left: 20, right: 20 }}
    className="custom-area"  // Apply custom class here
    style={{fill: 'black', stroke:'black'}}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area
      type="monotone"
      dataKey="uv"
      className="custom-d-area"
      stroke='var(--active-hover-color)'
      fill='var(--active-hover-color)'
    />
  </AreaChart>
);

export default ClientSatisfactionChart;
