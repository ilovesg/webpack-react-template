import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from '../store/cashReducer';
import { addCustomerAction, removeCustomerAction, fetchCustomersAction } from '../store/customersReducer';
import './app.scss';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (sum) => {
    dispatch(addCashAction(sum));
  };

  const getCash = (sum) => {
    dispatch(getCashAction(sum));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Math.random().toString(36).substring(2, 9),
    };

    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
  };

  return (
    <div className="app">
      <h1>Webpack-React starter template</h1>
      <div className="cash">
        <h2>Cash</h2>
        <div>{cash}</div>
        <button type="button" className="btn" onClick={() => addCash(+prompt())}>Add cash</button>
        <button type="button" className="btn" onClick={() => getCash(+prompt())}>Get cash</button>
      </div>
      <div className="customers">
        <h2>Customers</h2>
        <button type="button" className="btn" onClick={() => addCustomer(prompt())}>Add customer</button>
        <button type="button" className="btn" onClick={() => dispatch(fetchCustomersAction())}>Add customers from remote server</button>
        {customers.length > 0
          ? (
            <ol>
              {customers.map((customer) => (
                <li key={customer.id}>
                  <span className="customers__name">{customer.name}</span>
                  <button type="button" onClick={() => removeCustomer(customer.id)}>
                    ×
                  </button>
                </li>
              ))}
            </ol>
          )
          : (
            <div>
              No customers found.
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
