import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from '../store/cashReducer';
import { addCustomerAction, removeCustomerAction, addCustomersFromRemoteServerAction } from '../store/customersReducer';
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

  const addCustomersFromRemoteServer = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => json.filter((user) => {
        let mustBeFiltered = false;

        customers.forEach((customer) => {
          if (user.id === customer.id) {
            mustBeFiltered = true;
          }
        });

        return !mustBeFiltered;
      }))
      .then((json) => dispatch(addCustomersFromRemoteServerAction(json)));
  };

  return (
    <div className="app">
      <span>{cash}</span>
      <button type="button" onClick={() => addCash(+prompt())}>Add cash</button>
      <button type="button" onClick={() => getCash(+prompt())}>Get cash</button>
      <button type="button" onClick={() => addCustomer(prompt())}>Add customer</button>
      <button type="button" onClick={() => addCustomersFromRemoteServer()}>Add customers from remote server</button>
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
