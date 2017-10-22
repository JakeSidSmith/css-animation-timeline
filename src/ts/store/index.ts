import { AnyAction, combineReducers, createStore } from 'redux';

const counter = (state = 0, action: AnyAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

export interface Store {
  counter: number;
}

export const store = createStore(combineReducers({counter}));

export default store;
