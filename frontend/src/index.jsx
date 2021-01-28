import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews';
import './css/style.css';

const item_id = 1;
ReactDOM.render(<Reviews item_id={item_id} />, document.getElementById('review'));
