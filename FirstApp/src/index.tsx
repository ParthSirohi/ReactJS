import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Timer } from './Timer';
import { Notifications } from './notifications';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Sample=ReactDOM.createRoot(
  document.getElementById('sample') as HTMLElement
);

const notify=ReactDOM.createRoot(
  document.getElementById('notifications') as HTMLElement
)

setInterval(()=>Sample.render(<Timer/>),1000);
setInterval(()=> notify.render(<Notifications/>),5000)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
