import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

 export let renderEntireTree = (state) => { 
  const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <BrowserRouter>
    <React.StrictMode>
      <App updateNewPostText={updateNewPostText} state={state} addPost={addPost} />
    </React.StrictMode>
    </BrowserRouter>
  );
 
}

