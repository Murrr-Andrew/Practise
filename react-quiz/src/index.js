import React from 'react';
import ReactDOM from 'react-dom/client';

import { QuizProvider } from './context/QuizContext';

import App from './components/App';

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuizProvider>
    <App />
  </QuizProvider>
);
