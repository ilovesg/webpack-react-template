const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';

export default function customersReducer(state = defaultState, { type, payload } = {}) {
  switch (type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [
          ...state.customers.filter((customer) => customer.id !== payload.id),
          payload,
        ],
      };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((customer) => customer.id !== payload),
      };

    default:
      return state;
  }
}

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload });
export const fetchCustomersAction = () => ({ type: FETCH_CUSTOMERS });
