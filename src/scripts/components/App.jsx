import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from '../store/cashReducer';
import { addCustomerAction, removeCustomerAction } from '../store/customersReducer';
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
      <span>{cash}</span>
      <button type="button" onClick={() => addCash(+prompt())}>Add cash</button>
      <button type="button" onClick={() => getCash(+prompt())}>Get cash</button>
      <button type="button" onClick={() => addCustomer(prompt())}>Add customer</button>
      {customers.length > 0
        ? (
          <ul>
            {customers.map((customer) => (
              <li key={customer.id}>
                {customer.name}
                <button type="button" onClick={() => removeCustomer(customer.id)}>
                  Remove customer
                </button>
              </li>
            ))}
          </ul>
        )
        : (
          <div>
            Клиенты отсутствуют!
          </div>
        )}
    </div>
  );
}

export default App;
