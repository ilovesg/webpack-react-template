const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const ADD_CUSTOMERS_FROM_REMOTE_SERVER = 'ADD_CUSTOMERS_FROM_REMOTE_SERVER';

export default function customersReducer(state = defaultState, { type, payload } = {}) {
  switch (type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, payload] };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((customer) => customer.id !== payload),
      };
    case ADD_CUSTOMERS_FROM_REMOTE_SERVER:
      return {
        ...state,
        customers: [...state.customers, ...payload],
      };

    default:
      return state;
  }
}

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload });
// eslint-disable-next-line max-len
export const addCustomersFromRemoteServerAction = (payload) => ({ type: ADD_CUSTOMERS_FROM_REMOTE_SERVER, payload });
