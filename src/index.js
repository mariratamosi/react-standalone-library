import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {SrimChat} from "./index_";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SrimChat message={"From React App index.js"}/>
  </React.StrictMode>
);
