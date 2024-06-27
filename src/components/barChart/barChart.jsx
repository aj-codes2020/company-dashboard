import React from 'react';
import './barChart.scss'
import { BarChart, Bar, CartesianGrid, Tooltip} from 'recharts';

const data = [
  { region: 'North', uv: 30 },
  { region: 'South', uv: 20 },
  { region: 'East', uv: 40 },
  { region: 'West', uv: 25 },
];

const ClientDistributionChart = () => (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{left: 20, right: 20}}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="uv" className="custom-fill" />
    </BarChart>
);

export default ClientDistributionChart;


