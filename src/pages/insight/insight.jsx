import React from 'react';
import { BarChart, PieChart, ScatterPlot, LineChart } from '../../components';
import './insight.scss';

const Insight = () => {
  return (
    <div id='insight'>
      {/* Page title */}
      <h1 className="page-title">Insight</h1>
      
      {/* Container for all graph components */}
      <div className="graphs grid-container">
        {/* Individual graph container for BarChart */}
        <div className="graph-container grid-d-6 grid-m-12">
          <BarChart />
        </div>
        
        {/* Individual graph container for PieChart */}
        <div className="graph-container grid-d-6 grid-m-12">
          <PieChart />
        </div>
        
        {/* Individual graph container for ScatterPlot */}
        <div className="graph-container grid-d-6 grid-m-12">
          <ScatterPlot />
        </div>
        
        {/* Individual graph container for LineChart */}
        <div className="graph-container grid-d-6 grid-m-12">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Insight;
