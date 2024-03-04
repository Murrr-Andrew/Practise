import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";

import store from "./store";

import App from "./App";

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// ========================================

// store.dispatch({
//   type: "account/deposit",
//   payload: 500
// });

// console.log(store.getState());

// store.dispatch({ type: "account/requestLoan", payload: {
//     amount: 1000,
//     purpose: "Buy a car"
// } });

// console.log(store.getState());

// ========================================

// store.dispatch(deposit(500));
// store.dispatch(withdraw(200));

// console.log(store.getState());

// ========================================


// store.dispatch(createCustomer("Andrew Murko", 3431911438));

// console.log(store.getState());
