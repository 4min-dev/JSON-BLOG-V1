import React from 'react';
import *as ReactDOMClient from 'react-dom/client';
import { App } from './App';
const app = ReactDOMClient.createRoot(document.querySelector('#app'))
app.render(<App/>)