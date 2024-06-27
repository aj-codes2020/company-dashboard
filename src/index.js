import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Grid } from '@aj-codes2020/ui-kit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Grid>
      <App />
    </Grid>
  </React.StrictMode>
);
