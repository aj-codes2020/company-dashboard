import React from 'react';
import './pieChart.scss';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Group A', value: 1 },
  { name: 'Group B', value: 2 },
  { name: 'Group C', value: 3 },
  { name: 'Group D', value: 4 },
];

const ClientIndustryChart = () => (
  <PieChart width={500} height={300}>
    <Pie
      data={data}
      cx={250}
      cy={150}
      labelLine={false}
      outerRadius={120}
      dataKey="value"
      className='pie-chart'
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} className={`slice-${index}`} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default ClientIndustryChart;
