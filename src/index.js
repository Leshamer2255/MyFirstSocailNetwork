import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you', likesCount: 12 },
  { id: 2, message: 'It`s my first post', likesCount: 11 },
  { id: 3, message: 'What are you talking about', likesCount: 13 },
  { id: 4, message: 'I don`t understand what it happens', likesCount: 15 },
  { id: 5, message: 'Fight', likesCount: 111 }
]
let dialogsData = [
  { id: 1, name: 'Anastasya' },
  { id: 2, name: 'Anton' },
  { id: 3, name: 'Xoma' },
  { id: 4, name: 'Dimas' },
  { id: 5, name: 'Colleague' }
]
let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'What do you mean' },
  { id: 3, message: 'I can do it' },
  { id: 4, message: 'yo' },
  { id: 5, message: 'Yo' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
