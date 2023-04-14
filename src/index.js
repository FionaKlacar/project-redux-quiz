import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styling/index.css';
import './styling/header.css'
import './styling/CurrentQuestion.css'
import './styling/progressbar.css';
import './styling/Summary.css'
import './styling/restartbutton.css'
import './styling/footer.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
