import React from 'react';
import './lineChart.scss';
import { LineChart, Line, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', uv: 10 },
  { month: 'Feb', uv: 5 },
  { month: 'Mar', uv: 20 },
  { month: 'Apr', uv: 10 },
  { month: 'May', uv: 30 },
];

const ClientGrowthChart = () => (
  <LineChart
    width={500}
    height={300}
    data={data}
    margin={{left: 20, right: 20}}
    className='recharts-line-chart'

  >
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip />
    <Line type="monotone" dataKey="uv" className="recharts-line" stroke="black"/>
  </LineChart>
);

export default ClientGrowthChart;
