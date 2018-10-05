import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faShoppingCart)

ReactDOM.render( < App / > , document.getElementById('root'));