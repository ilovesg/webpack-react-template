const defaultState = {
  cash: 5,
};

const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';

export default function cashReducer(state = defaultState, { type, payload } = {}) {
  switch (type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + payload };
    case 'GET_CASH':
      return { ...state, cash: state.cash - payload };

    default:
      return state;
  }
}

export const addCashAction = (payload) => ({ type: ADD_CASH, payload });
export const getCashAction = (payload) => ({ type: GET_CASH, payload });
