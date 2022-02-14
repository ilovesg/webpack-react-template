import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from '../store/cashReducer';
import './app.scss';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const addCash = (sum) => {
    dispatch(addCashAction(sum));
  };

  const getCash = (sum) => {
    dispatch(getCashAction(sum));
  };

  return (
    <div className="app">
      <span>{cash}</span>
      <button type="button" onClick={() => addCash(+prompt())}>Add cash</button>
      <button type="button" onClick={() => getCash(+prompt())}>Get cash</button>
    </div>
  );
}

export default App;
