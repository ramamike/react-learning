import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 0, message: "message 0", likesCount: 12 },
  { id: 1, message: "message 1", likesCount: 13 },
  { id: 2, message: "message 2", likesCount: 9 },
  { id: 3, message: "message 3", likesCount: 8 },
  { id: 4, message: "message 4", likesCount: 1 },
]

let dialogsData = [
  { id: 0, name: "user 0" },
  { id: 1, name: "user 1" },
  { id: 2, name: "user 2" },
  { id: 3, name: "user 3" },
  { id: 4, name: "user 4" },
]
let messagesData = [
  { id: 0, message: "message 0" },
  { id: 1, message: "message 1" },
  { id: 2, message: "message 2" },
  { id: 3, message: "message 3" },
  { id: 4, message: "message 4" },
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts}
        dialogsData={dialogsData}
        messagesData={messagesData} />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
