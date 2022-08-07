import { render } from 'react-dom';
import React from 'react';
import App from './App/App';

// render(<App ></App>, document.getElementById('app'))
render(<App page = 'home'></App>, document.getElementById('app'))